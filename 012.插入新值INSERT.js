/**
 * 数据库地址：localhost:3306
 * 账号：root
 * 密码：123465
 * 数据库名：db001
 * db001中含有表：tb_china
 * tb_china中含有字段：[id][location][tmper]
 *                      1	New York 20
 *                      2	天津	     22
 *========================================
 *
 查询数据库名称：db001
 查看数据库db001中是否有表：tb_china
 查看tb_china中所有信息
 =========================================
 */
let mysql=require('mysql');
let connection=mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'123456',
    database:'db001'
});
//查看所有数据库名
// connection.query('show databases;',function (err,data) {
//     console.log(data);
// });
// connection.end();



//不能重复使用
connection.query("insert into tb_china(id,location,tmper) values(?,?,?)",['5','22','6'],function (err,data) {
    if (err){

    } else {
        console.log(data);
    }

});
connection.end();

/**
 OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0
}
 */
