const express =require("express");
const ExpressError = require("./Expresserror");
const app =express();

/// middleware 
// app.use((req,res,next)=>{
//     console.log("hi , i am middleware");
//    next();
// })
// //// 2nd middleware
// app.use((req,res,next)=>{
//     req.time =new (Date.now());
//    console.log(req.method, req.hostname ,req.path ,req.time);
//    next();
   
// })
// app.use('/user/:id', (req, res, next) => {
//     console.log('Request Type:', req.method)
//     next()
//   })

// app.use("/api",(req,res,next)=>{
//     let {token} =req.query;
//     if (token =="giveaccess") {
//         next();
//     }
//     res.send("ACCES DENAIED!")
// })

// app.get("/",(req,res)=>{
//     res.send("hello friends");
    
// })
// app.get("/random",(req,res)=>{
//     res.send("this is random");
// });

const cheaktoken =((req,res,next)=>{
    let {token} =req.query;
    if (token =="giveaccess") {
        next();
    }
    throw new ExpressError(401,"ACCES DENAIED!");
}
)
app.get("/api",(req,res)=>{
    abvd=abvd
})
app.use((err, req, res, next) => {
    console.log("-----Error ------");
    next(error);
  })

app.listen(8080,()=>{
    console.log("server was listining");  
    
});