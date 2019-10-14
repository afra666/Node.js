let fs=require('fs');
fs.writeFile('./a.txt',"this is 哈哈哈",(err)=>{
    if (!err){console.log("ok");}
})
