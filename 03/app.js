const http = require("http");
const url = require("url");
const fs = require("fs");


function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    });
}

const callback = function(req, res){
    var parts = url.parse(req.url);

    if(parts.path == "/"){
        res.writeHead(200, {"Content-type": "text/html; charset=utf-8"});
        readFile(res, "portalApi.html");
    } else if(parts.path == "/instituicao"){
        res.writeHead(200, {"Content-type": "application/json; charset=utf-8"});
        readFile(res, "fatec.json");
    }
}


var server = http.createServer(callback);

server.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})

console.log("Servidor inicializado em http://localhost:3000");