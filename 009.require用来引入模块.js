let express=require('express');
let app=express();
app.get('/',function (req,res) {
    res.send("this is a get method");
});
app.listen(8088);
/**
 this is a get method
 */
