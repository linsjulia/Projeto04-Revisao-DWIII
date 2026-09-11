
const http = require("http");
const url = require("url");

var callback = function (req, res){

    // Faz o parse da URL, separando o caminho (end-poits):
    var parts = url.parse(req.url);

    if(parts.path == "/fatec"){
        res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'});
        res.end('Bem-vindo à Faculdade de Tecnologia');

    } else if(parts.path == "/fecap"){
        res.writeHead(200, {"Content-type": "text/plain; charset=utf-8"});
        res.end("Bem-vindo a Fatec Diadema");

    } else {
        res.writeHead(404, {"Content-type": "text/plain; charset=utf-8"});
        res.end("Recurso não encontrado no servidor");
    }
}

var server = http.createServer(callback);
server.listen(3000, () => { // No parametro do metodo listen passamos uma funcao, regra High-order function (funcao que aceita outra funcao como argumento)
    console.log("Servidor rodando na porta 3000");
});
console.log("Servidor inicializado em http://localhost:3000");
