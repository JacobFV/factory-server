const express = require('express')
const app = express()
const cmd = require('node-cmd')
const path = require('path')
const csv = require('csvtojson')
const exec = require('child_process').exec
const spawn = require('child_process').spawn

localhostname = 'factory.local'
let context = {
    'localhostname' : localhostname,
    'apps' : [ ],
    'other_data': [
        {
            'key':'ssh',
            'value':'pi@'+localhostname
        },
        {
            'key':'hostname',
            'value':localhostname
        },
        {
            'key':'username',
            'value':'pi'
        },
        {
            'key':'password',
            'value':'build'
        },
        {
            'key':'uptime',
            'value':null
        },
        {
            'key':'cpu temp',
            'value':null
        },
        {
            'key':'cpu usage',
            'value':null
        },
        {
            'key':'usb devices',
            'value':null
        },
        {
            'key':'vpn',
            'value':'contact operator'
        },
    ],
    'web_apps': [
        {
            'name': 'Kiri:Moto',
            'url': `https://grid.space/kiri/`
        },
        {
            'name': 'Meta:Moto',
            'url': `https://grid.space/meta/`
        },
        {
            'name': 'JS Cut',
            'url': `http://jscut.org/jscut.html`
        },
        {
            'name': 'UV4L Server',
            'url': `http://${localhostname}:8090/`
        },
        { 'name':'NC Viewer', 'url':'https://ncviewer.com'}, {'name':'notes', 'url':'https://docs.google.com/document/d/10gQe1Vazsi64UkjarB6-xqW4kniOzVpVKTBaeNAh8x8/edit'}
    ]
}
//get app states from applications.csv
//const app_states = {} //keys: name, vals: PID or null if not active
const CLIENT_APP_ON = true
const CLIENT_APP_OFF = false
let applicationsArray=[]


csvPath = path.join(__dirname,'applications.csv')
console.log('loading csv',__dirname,csvPath)
csv().fromFile(csvPath).then(jsonObj => {
    
applicationsArray = jsonObj

context['apps'] = applicationsArray.map((application) => {
    //app_states[application.name] = CLIENT_APP_OFF
    return {
        'name': application.name,
        'port': application.port,
        'state': CLIENT_APP_OFF
    }
})
//console.log('context[apps]=',context['apps'])
//console.log('app_states populated')
    

function set_field(key, value) {
    context['other_data'].find(datum => {
        if(datum['key'] == key) {
            datum['value'] = value
        }
    })
}
    
function set_app_state(appname, state) {
    context['apps'].find(app => {
        if(app['name'] == appname) {
            let was_different = false;
            if(app['state'] != state) {
                console.log(`changing ${appname} state from ${app['state']} to ${state}`)
            }
            app['state'] = state
            if(was_different) {
                console.log(`${appname} state is now ${app['state']}`)
            }
        }
    })
}
    
function update_context_var() {
    //update context[apps].state
    //Object.keys(app_states).forEach(app_name => {
    //    set_app_state(app_name, app_states[app_name])
        //console.log(`updating ${app_name} state to ${app_states[app_name]}. Now ${context['apps'][app_name]}`)
    //})
    
    //uptime
    exec(
        `awk '{print int($1/3600)":"int(($1%3600)/60)":"int($1%60)}' /proc/uptime`,
        function(error, stdout, stderr){ 
            set_field('uptime', stdout.trim()) 
        }
    )
    //cpu temp
    exec(
        `vcgencmd measure_temp`,
        function(error, stdout, stderr){ 
            set_field('cpu temp', stdout.trim()) 
        }
    )
    //cpu usage
    exec(
        `grep 'cpu ' /proc/stat | awk '{usage=($2+$4)*100/($2+$4+$5)} END {print usage "%"}'`,
        function(error, stdout, stderr){ 
            set_field('cpu usage', stdout.trim()) 
        }
    )
    //mem usage
    exec(
        `free -m`,
        function(error, stdout, stderr){ 
            outputs=stdout.split(' ')
            set_field('mem usage', outputs[7]) 
        }
    )
    
    //usb devices
    exec(
        `lsusb`,
        function(error, stdout, stderr){ 
            set_field('usb devices', 'stdout') 
        }
    )
    //console.clear()
    //console.log(context)
}
setInterval(update_context_var, 1000)

function enable_application(appname) {
    console.log('req to launch',appname)
    if(context['apps'].find(app => app.name == appname).state == CLIENT_APP_OFF) {
        console.log('launching',appname)
        app_data = applicationsArray.find(app => app.name == appname)
        cmd.get(
            'PORT='+app_data.port+'; '+app_data.command,    
            function(err, data, stderr) { }
        )
        context['apps'].find(app => app.name == appname).state = CLIENT_APP_ON
    }
}

function disable_application(appname) {
    //if(!(app_pids[appname] === null)) { //I want to disable them regardless of what server.js thinks is enabled
        port = applicationsArray.find(app => app.name == appname).port
        cmd.get(
            `fuser -k ${port}/tcp`,
            function(err, data, stderr) {
                console.log(`killed ${appname} on ${port}`)
                //app_states[appname]=CLIENT_APP_OFF
                /*let pid = data.split(' ')[1]
                cmd.get(`kill ${pid}`, (e2,d2,stde2) => {
                    console.log(`killed process ${pid} for name:${appname}`)
                    app_pids[appname]=null
                })*/
            }
        )
        context['apps'].find(app => app.name == appname).state = CLIENT_APP_OFF
        /*cmd.get(
            `kill ${app_pids[appname]}`,
            function(err, data, stderr){
                console.log(err,data,stderr)
            }
        )*/
    //}
}


///ROUTING
    
/*app.use(function(req, res, next) {
    console.log(req.method, req.path)
    next()
})*/
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.use('/api/data', function(req, res, next) {
    console.log(context)
    res.json(context)
})

app.use('/api/apps/:appname/enable', function(req, res, next) {
    enable_application(req.params.appname)
    res.sendStatus(200)
})

app.use('/api/apps/:appname/disable', function(req, res, next) {
    disable_application(req.params.appname)
    res.sendStatus(200)
})

app.use('/api/reboot', function(req, res, next) {
    cmd.run('sudo reboot')
    res.sendStatus(200)
})

//console.log('setting up static serve')
app.use(express.static(path.join(__dirname,'web')));
//console.log('everything ready')
app.listen(80, () => console.log('listening on port 80'));
//console.log('last LOC')
    
    
})
