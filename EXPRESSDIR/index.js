const express =require('express');   /// require express
const app =express();  
// console.dir(app);
let port =6100;
app.listen(port,() => {                      //// listen create on web server
      console.log(`app is listening on port ${port}`);
      
})
// app.use((req, res) => {
//       // console.log(req); /// to print all request methods
//       console.log("Request received"); 
//       // res.send("hello arvind  kumar yadav");
//       //// objects bhi send kr sakte hai 
//       // res.send({
//       //       name:"arvind",
//       //       marks:85
//       // });
//       ///html bhi send kr sakte hai 
//       const code="<h1>hello world </h1> <br> <ul> <li> mango </li> <li>orange</li> <li> banana</li> <li>etc </li></ul>";
//       res.send(code);
//   });

// app.get("/",(req,res) =>{
//       console.log("you contected root path");
      
// })

// app.get("/apple", (req, res) =>{
//       res.send("you contected apple path")
// })
// app.get("/orange",(req,res)=>{
//       console.log("you contected orange path");
      
// })
// app.get("*",(req,res)=>{
//       console.log("this path is not exits");
      
// })
// app.post("/",(req,res)=>{
//       console.log("you send a post request ");
      
// })
app.get("/:username/:id",(req,res)=>{
      // console.log(req.params);
      let {username , id} =req.params;
      res.send(`welcome to the ${username}`);
})