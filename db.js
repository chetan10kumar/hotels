/*This file will act as bridge between node js server and mongo db server*/
const mongoose=require('mongoose');
/*Now defining the mongoDb url*/
const mongoUrl="mongodb://localhost:27017/restaurants";
/*Now establishing the connection*/
mongoose.connect(mongoUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
/*Now defining mongoose object which performs in mongoDb connection*/
const db=mongoose.connection;
/*Now event listeners-event listeners reacts to different states of mongoDb connection*/
db.on('connected',()=>
{
    console.log("Connected to mongoDb server");
})
db.on('error',(err)=>
{
    console.log("error while connecting to mongoDb server");
})
db.on('disconnected',()=>
{
    console.log("Disconnected to mongoDb server");
})
/*Now exporting the mongoDb connection*/
module.exports=db;