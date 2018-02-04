const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'});
    response.write('Oi');
    response.end();
});

// opçao 1
// server.listen(3000, () => {
//     console.log('rodou!');
// });

// opcao 2
// server.listen(3000, Ligado);
// function Ligado(){
//     console.log('funcionou');
// }

//opcao 3
const constLigado = () => {
    console.log('aeeeeee');
}

server.listen(3000, constLigado);
