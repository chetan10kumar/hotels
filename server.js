// function add(a,b)
// {
//     return a+b;
// }
// var add=(a,b)=>{return a+b};
// var result=add(2,7);
// console.log(result);
// function add(a,b)
// {
//     return a+b;
// }
// var result=add(10,20);
// console.log(result);

// var add=(a,b)=>a+b;
// var result=add(20,30);
// console.log(result);
// (function()
// {
//     console.log("It's Chetan Kumar");
// })();
/*Call Back function-when main function process is finished than call back function start*/
// function callback()
// {
//     console.log("Printing is successfully completed");
// }
//  const add=function (a,b)
//  {
//     let result=a+b;
//     console.log(result);
    
//  }
// add(2,3,()=>console.log("add complete"));
/*Fs and Os Modules
var fs=require('fs');
var os=require('os');
var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt','Hi'+user.username+'!\n',()=>
{console.log("file is created")});*/
//callback function
/*Lodash library helps to del with data */
// var _=require('lodash');
// var data=[1,2,2,3,4,4,5,6];
// var filter=_.uniq(data);
// console.log(filter);
/*JSON-It means storing data in well structured and well aligned form*/
/*Javascript object Notation */
/*Mostly the data in json is stroed in string form*/
// const jsonString='{"NAME":"CHETAN KUMAR","AGE":19,"PLACE":"NEW YORK"}'
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);
/*Convertig string to object*/
// const jsonString='{"NAME":"CHETAN KUMAR","AGE":19,"PLACE":"PUNJAB"}'
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject.NAME);
/*Conerting object to string*/
// const jsonObject={NAME:"CHETAN KUMAR",AGE:19,PLACE:"NANGAL DAM"};
// const jsonString=JSON.stringify(jsonObject);
// console.log(jsonString);

/*Converting string to Object*/
// const jsonString='{"NAME":"CHETAN KUMAR","AGE":19,"PLACE":"NANGAL DAM"}';
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);
/*Object to String*/
// const jsonObject={Name:"Chetan Kumar",Age:19,Place:"Nangal Dam"};
// const jsonString=JSON.stringify(jsonObject);
// console.log(jsonString);
/*We can create a server using express.js*/
/*fs and *os* modules*/
/*In fs we can create new file and something is written inside it*/
/*By using os module we can get the user information*/
/*Converting json String to json Object*/
// const jsonString='{"NAME":"CHETAN KUMAR","AGE":19,"PLACE":"NANGAL DAM"}'
// const jsonObject=JSON.parse(jsonString);
// console.log(jsonObject);
// /*Converting json object to json String*/
// const jsonObject1={NAME:"CHETAN KUMAR",AGE:19,PLACE:"NANGAL DAM"};
// const jsonString1=JSON.stringify(jsonObject);
// console.log(jsonString1)
/*Creating a Server using express*/
const express=require('express');
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
const personRoutes=require('./routes/personRoutes')

app.use(bodyParser.json());
app.use('/person',personRoutes);
app.get('/',(req,res)=>
{
    res.send("Hello World");
})

app.listen(3000,()=>
{
    console.log("Server is running on port:3000");
})