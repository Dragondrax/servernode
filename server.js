const http = require('http'); 
const host = 'http://localhost';
const port = 3000;
const status = require('./memoriaRam.js')

http.createServer((req, res) => {
    let url = req.url;

    if(url ==='/status'){
        res.end(JSON.stringify(status));
    }else {
        res.end('<h1>Página não encontrada</h1>')
    }

    
}).listen(port, () => console.log(`Server is running in ${host}: ${port}, ${status}`));