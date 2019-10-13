/**
get的作用：
    当服务器get到ts时，sent一个字符串到浏览器中。
*/


//express_demo.js 文件
var express = require('express');//加载express
var app = express();//实例化一个express应用


app.get('/ts', function (req, res) {
  res.send('Hello World123466666');
});//在express上监听get请求

app.listen(8888);//添加端口


==========================out===================
http://localhost:8888/ts

Hello World123466666
