let express=require('express');
let app=express();
// app.get()就是一个路由（routing）
app.get('/',function (req,res) {
    res.send("this is a response!")
});//主页get请求
app.get('/admin',function (req,res) {
    res.send("this is a response!")
});//get请求
app.get('/user',function (req,res) {
    res.send("this is a response!")
});//get请求

app.listen(500);
