require('yargs')
    .scriptName("port-parser")
    .usage('$0 <cmd> [args]')
    .command('start [port]', '', (yargs) => {
        yargs.positional('port', {
            type: 'number',
            default: '',
            describe: 'port to listen on'
        })
    }, function (argv) {
        PORT = argv.port
        launch(PORT)
    })
  .help()
  .argv

function launch(PORT) {
    var express = require("express")
    var path = require("path")

    var app = express()
    var port = PORT

    app.use(function (req, res, next) {
        var filename = path.basename(req.url)
        console.log("The file " + filename + " was requested.");
        next()
    })
    app.use(express.static(path.join(__dirname,'srv')))

    app.listen(PORT, () => console.log(`jscut static server listening on http://localhost:${PORT}`))
}