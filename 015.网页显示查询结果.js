let express=require('express');
let app=express();
app.listen(3000);
let mysql=require('mysql');
let connect=mysql.createConnection({
    host :'localhost',
    user:'root',
    password:'123456',
    port:'3306',
    database:'db001'
});
connect.query('select * from tb_china;',function (err,data) {
    console.log(data);
    app.get('/',(req,res)=>{
        res.send(data);
    })
});
/*
	
0	
id	1
location	"New York"
tmper	"20"
1	
id	2
location	"天津"
tmper	"22"
2	
id	3
location	"London"
tmper	"18"
3	
id	4
location	"shanghai"
tmper	"25"
* */
