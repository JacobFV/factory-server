var context = {};

function updateContext() {
    $.getJSON(URL, function(data) {
        context = data;
    });
    /*context = {
        "localhostname" : "--(get from this document's head URL)-- actually all this data comes unprocessed from the server",
        "apps" : [
            {
                "name": ,
                "port": ,
                "on":
            },
            {
                "name": ,
                "port": ,
                "on":
            },
        ],
        "other_data": [
            {
                "key": ,
                "value":
            },
            {
                "key": ,
                "value":
            },
        ]
    };*/
}

setTimeout(updateContext(), 1000);

$(Document).ready(function() {
    $("body").innerHTML += Handlebars.templates.index(context);
});