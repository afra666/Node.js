let mysql      = require('mysql');
let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456'
});


connection.query('show databases;',(err,data)=>{
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
});
/*
 [
  RowDataPacket { Database: 'db001' },
  RowDataPacket { Database: 'information_schema' },
  RowDataPacket { Database: 'mysql' },
  RowDataPacket { Database: 'netdisk' },
  RowDataPacket { Database: 'performance_schema' },
  RowDataPacket { Database: 'sys' }
]
*/
