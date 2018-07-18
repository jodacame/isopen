const scan = require("./scan");





var check = function(host,ports,callback){
    let response = {};
    let list = [];
    if (typeof ports == 'string' || typeof ports == 'number'){
        if(ports.toString().indexOf("-")>-1)
        {
            let r = ports.toString().split("-");
            if (parseInt(r[0]) > 0 && parseInt(r[1]) > 0)
            {
                for (let x = parseInt(r[0]); x <= parseInt(r[1]); x++)
                    list.push(x);
            }else{
                throw 'Invalid Ports';
            }
        }else
            list.push(ports);
    }else{
        list = ports;
    }
    if (list.length>10)
        console.warn("The intense scan can take a long time.")
    target = host;
    next(0, callback, host, response, list);
}

var next = function (i, callback, host, response, list){
    
    let port = list[i];
    
    scan(host,port,function(error,resp){
        response[resp.port] = resp;
        if(i<list.length-1)
            next(i + 1, callback, host, response, list);
        else
            callback(response);
    });
}

module.exports = check;