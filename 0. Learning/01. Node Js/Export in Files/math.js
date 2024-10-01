const sum = (a, b) => a + b;
const mul = (a, b) => a * b;

const g = 9.8;
const PI = 3.14;

module.exports = "Export in  files successfully";


// for sending the all values 

let obj = {
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
};

module.exports =  obj;


/* 

other ways :

    module.exports = {
    sum:sum,
    mul:mul,
    g:g,
    PI:PI,
    };


    module.exports.sum = (a, b) => a + b;
    module.exports.mul = (a, b) => a * b;
    
    exports.sum = (a, b) => a + b;
    exports.mul = (a, b) => a * b;


*/