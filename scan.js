const net = require('net')
const Socket = net.Socket
const portsNames = require("./ports.json");


var check = function (host,port,callback){
    
    let socket = new Socket()
    let status = null
    let error = null
    let connectionRefused = false

    socket.setTimeout(500)
    socket.on('timeout', function () {
        status = false
        error = new Error('Timeout 500ms')
        socket.destroy()
    })


    socket.on('connect', function () {
        status = true
        socket.destroy()
    })
    
    socket.on('error', function (exception) {
        if (exception.code !== 'ECONNREFUSED') {
            error = exception
        } else {
            connectionRefused = true
        }
        status = false
    })
    
    socket.on('close', function (exception) {
        if (exception && !connectionRefused) { error = error || exception } else { error = null }
        let r = {};
        let label = false;
        if (portsNames.ports[port]){
            if (portsNames.ports[port][0])
                label = portsNames.ports[port][0].description;
            if (portsNames.ports[port].description && !label)
                label = portsNames.ports[port].description;
        }
        if (!label)
            label = 'unknow';
        
        r = { port: port,isOpen: status, label: label};
        callback(error,r);
    })

    socket.connect(port, host);
}
module.exports = check;