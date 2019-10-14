let http=require('http');
let server=http.createServer();
server.on('request',function (req,res) {
    console.log('已收到请求');
    res.end("hello !")
});
server.listen(80,()=>{
    console.log("开始请求");
});
