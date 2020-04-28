//alert('welcome');
var context = {};

function updateContext() {
    $.getJSON('/api/data', function(data) {
        context = data;
        console.log(context);
        $("#content").append(Handlebars.templates.index(context));    
    });
}


function set_app_state(name, state) {
    console.log(`turning app ${name} ${state}`);
    if(state) {
         $.get('/api/apps/'+name+'/enable');
    }
    else {
         $.get('/api/apps/'+name+'/disable');
    }
    console.log(`setting app ${name} ${state} success`);
}

function rebootPi() {
    $.get('/api/reboot');
}

updateContext();