const http = require('http');
const server = http.createServer(function(req, res){
    // Incoming request here
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is home page</p></body></html>')
        res.end();
    }else if(req.url == '/student'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is student page</p></body></html>')
        res.end();
    }else if(req.url == '/admin'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is admin page</p></body></html>')
        res.end();
    }else if(req.url == '/data'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(JSON.stringify({message: "Hello World JSON"}))
        res.end();
    }else{
        res.end("Invalid request!");
    }
    
})
server.listen(8000);
console.log('web server at port 8000 is running--')