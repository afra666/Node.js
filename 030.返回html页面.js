let http=require('http');
let fs=require('fs');

let server=http.createServer();
server.listen(3000);
server.on('request',(req,res)=>{
    if (req.url==='/'){
        fs.readFile('./view/add.html','utf8',(err,data)=>{
                console.log(data);
                res.end(data);
        })
    } else if (req.url==='/add'){

    } else {

    }
});


//========
目录结构：
node18
    |
    public
        |
        css
        js
    |
    view
        |
        404.html
        index.html
        add.html
    |
    app.js
