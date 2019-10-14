let http=require('http');
let server=http.createServer();
server.listen(8080);
server.on('request',(req,res)=>{
   if (req.url==='/'){
       res.end("Index .com")
   }  else if(req.url==='/login'){
       res.end("Login user account ...")
   }else {
       res.end("404 NO FOUND")
   }
});
