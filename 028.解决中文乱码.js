let http=require('http');
let server=http.createServer();
server.listen(8080);
server.on('request',(req,res)=>{
   res.setHeader('Content-Type','text/html;charset=UTF-8');
   res.end("<a href='https://google.com'>Google主页</a>");

});
