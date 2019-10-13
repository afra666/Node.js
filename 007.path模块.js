/**
 * 
 * path模块灵活输出文件的路径
 */
let path=require('path');
console.log(__filename);
//path.basename(filepath) 只是输出路径的最后一部分，并不会判断是否文件名。
console.log(path.basename(__filename));




/**

D:\Program Files\jqm\untitled5\bin\w6.js
w6.js


*/
