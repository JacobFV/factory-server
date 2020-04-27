const express = require('express');
const app = express();
const cmd = require('node-cmd')
const path = require('path')
const csv=require('csvtojson') 

localhostname = 'factory.local'
let context = {
    'localhostname' : localhostname,
    'apps' : [ ],
    'other_data': [ ]
}
const applicationsArray=await csv().fromFile('applications.csv');

//get app states from applications.csv
const app_pids = {}
const CLIENT_APP_OFF = 'OFF'
const CLIENT_APP_ON = 'ON'
applicationsArray.foreach((application) => {
    app_pids[application.name] = null
    context['apps'].push({
        'name': application.name,
        'port': application.port,
        'state': CLIENT_APP_OFF
    })
})

//TODO: start timer to periodically update context
function update_context_var() {
    //update context[apps].state
    //update other data<!--{hostname, uname, pwd, uptime, cpu temperature, free memory, cpu usage, usb devices}-->
}

function enable_application(name) {
    command = applicationsArray.find(app => app.name == name).command
    cmd.run(command)
    //TODO: get PID
}

function disable_application(name) {
    cmd.run(`kill ${}`)
}


///ROUTING

app.use(function(req, res, next) {
    console.log(req.method, req.path)
    next()
})

app.use('/api/data', function(req, res, next) {
    res.json(context)
})

app.use('/api/apps/:app/enable', function(req, res, next) {
    
})

app.use('/api/apps/:app/disable', function(req, res, next) {
    
})

app.use('/api/reboot', function(req, res, next) {
    cmd.run('sudo reboot')
})

app.use(express.static(path.join(__dirname,'web')));

app.listen(80);