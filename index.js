const express=require ('express')
const pageRoutes=require("./routes/pageRoutes");
const app=express();
const timeMid=require("./middlewares/timeMiddleware")

app.use(express.static(__dirname+"/public"))
app.use(timeMid, pageRoutes);
app.set("view engine","ejs")
app.set('views',__dirname+"/views");






app.listen(4091,()=>console.log('Running'));
