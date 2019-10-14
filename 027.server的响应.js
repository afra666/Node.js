//引入http模块
let http=require('http');
//创建req和res的服务器
let server=http.createServer();
//监听端口
server.listen(8080);
//监听事件
server.on('request',function (req,res) {
    res.end(req.url);
});

//输入http://localhost:8080/ts/info
//输入/ts/info
