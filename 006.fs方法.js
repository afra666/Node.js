//异步
let fs=require('fs');
fs.readFile('my.txt',function (err,data) {
    if (err){
        return console.error(err);
    }
    console.log(data.toString());
});
/**
 * 
 this is from my.txt
 这是来自文本的文字
 */



=================================


//同步读取，占用IO

//同步读取文件fs
let fs=require('fs');
let data=fs.readFileSync('my.txt');
console.log(data.toString());
console.log("同步读取成功 ！");
