const mongoose = require('mongoose');

/// to connect to the database

mongoose.connect("mongodb://127.0.0.1:27017/test")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));

/// to create a schema

const userSchema = new mongoose.Schema({
  name: String, 
  email: String,
  age: Number,
});

const User =mongoose.model("User", userSchema); 

/// schema validations 


// /// findbyidand delete
// User.findByIdAndDelete("67aa1b529ad431f48ac4ef1a").then((res)=>{
//   console.log(res);
// })
// /// delete one
// User.deleteMany({age:55}).then((res)=>{
//   console.log(res);
// })
// /// find and updates 
// User.findOneAndUpdate({name:"ravi"},{name:"raviran"}).then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// })
  
// /// updates 
// User.updateMany({age:{$gt:30}},{age:55}).then((res)=>{
//   console.log(res);
// }
// ).catch((err)=>{
//   console.log(err);
// })

// User.findById({_id:"67aa1b529ad431f48ac4ef20"}).then((res)=>{
//   // console.log(res[0].name);
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
  
// })

// User.insertMany([
//   {name:"anand",email:"anandqw@gmail.com",age:50},
//   {name:"ravi",email:"ravi72@gmail.com",age:30},
//   {name:"rvind",email:"ravindra@gmailcom",age:40},
//   { "name": "kiran", "email": "kiran12@gmail.com", "age": 28 },
//   { "name": "neha", "email": "neha.singh@yahoo.com", "age": 35 },
//   { "name": "sandeep", "email": "sandeep93@gmail.com", "age": 33 },
//   { "name": "priya", "email": "priya123@gmail.com", "age": 25 },
//   { "name": "raj", "email": "raj77@yahoo.com", "age": 29 },
//   { "name": "manoj", "email": "manoj.b123@gmail.com", "age": 45 },
//   { "name": "ananya", "email": "ananya.patel@outlook.com", "age": 32 },
//   { "name": "sunil", "email": "sunil_76@gmail.com", "age": 38 },
//   { "name": "simran", "email": "simran.m@outlook.com", "age": 27 },
//   { "name": "vijay", "email": "vijay.j@ymail.com", "age": 41 }
// ]).then ((res) => {
//   console.log(res);
// });


// const user1 = new User({
//     name: "Arvind",
//     email: "arvindkr@gmail.com",
//     age: 21,
// });
// const User2 = new User({
//     name: "ravi",
//     email: "ravi@gmail.com",
//     age: 21,
// });
// // user1.save();
// User2
//    .save()
//     .then((data) => {
//          console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });