const isopen = require("./isopen");


isopen('github.com', 21,function(response){
    console.log("TEST: Single Port (21)");
    console.log(response);
})


isopen('github.com', '20-23', function (response) {
    console.log("TEST: Range Ports (20-23)");
    console.log(response);
})


isopen('github.com', [21, 22, 80, 443], function (response) {
    console.log("TEST: Array Ports [21,22,80,443]");
    console.log(response);
})