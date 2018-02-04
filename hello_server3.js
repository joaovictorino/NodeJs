const http = require('http');
const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    if(request.url == '/'){
        response.write('pagina principal');
    }else if(request.url == '/bemvindo'){
        response.write('bem vindo');
    }else{
        response.write('pagina nao encontrada');
    }
    response.end();
});
server.listen(3000, () => {console.log('ok');})