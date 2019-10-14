//j1.js
let j2=require('./j2');
j2.show();

//j2.js
function show() {
    console.log("this is from b.info****");
}
exports.show=show;
