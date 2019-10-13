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
