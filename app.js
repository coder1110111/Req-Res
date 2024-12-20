const http=require('https');

let port=3000;
server.listen(port, ()=>{
    console.log("Server is Running");
});
const server=http.createServer(function(req,res){
    console.log("Server is Created");
    res.setHeader('Content-Type','text/html');
    if(req.url=='/home'){
        res.statusCode=200;
        res.end("<h1>Welcome home</h1>");
    }
    else if(req.url=='/about'){
        res.statusCode=200;
        res.end("<h1>Welcome to About</h1>")
    }
    else if(req.url=='/node'){
        res.statusCode=200;
        res.end("<h1>Welcome to my Node Js Project</h1>");
    }
    else{
            res.statusCode=404
            res.end("<h1>Page not Found</h1>")
    } 

});
