# isopen
isOpen can check a range of ports (TCP) for 'open' or 'closed' status with label name (Ports Scanner)

[![NPM](https://nodei.co/npm/isopen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/isopen/)


# Usage
Examples

````javascript
const isopen = require("isopen");

// Check single port
isopen('github.com', 80,function(response){
    console.log(response);
});

// Check Range 
isopen('github.com', '20-30',function(response){
    console.log(response);
});

// Check array of ports 
isopen('github.com', [21,22,80,443],function(response){
    console.log(response);
});
````

## API
````javascript
isopen(host,ports,callback);
````
* **host:** domain or ip address
* **ports:** port (Integer) | ports (Array) | ports (Range) * Check Examples
* **Callback:** function with object reponse

## TEST
````bash
npm test
````