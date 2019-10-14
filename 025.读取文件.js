let fs=require('fs');
fs.readFile('./a.txt',(err,data)=>{
    console.log(data.toString());
})
//
let fs=require('fs');
fs.readFile('./a.txt','utf8',(err,data)=>{
    console.log(data);
})
