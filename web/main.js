var context = {};

function updateContext() {
    $.getJSON('/api/data', function(data) {
        context = data;
    });
}

setTimeout(updateContext(), 1000);

function set_app_state(name, state) {
    if(state) {
         $.get('/api/apps/'+name+'/enable');
    }
    else {
         $.get('/api/apps/'+name+'/disable');
    }
}

function rebootPi() {
    $.get('/api/reboot')
}

$(Document).ready(function() {
    $(document.body).append(Handlebars.templates.index(context));
});