const http = require ("http") ;
const myModule = require("./module");

const server = http.createServer(function (req, res) {
const _myModule = new myModule.MyModule("Alex", "Gavrylov");

res.write(_myModule.getGreetingMessage());
res.end();
});

server.listen(5000);