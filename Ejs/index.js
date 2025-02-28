const express =require ("express");
const app =express();
const path =require("path");

const port =8080;

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/ig/:username",(req, res)=>{
      let { username } =req.params;
      res.render("instragram.ejs",{ username });
});

app.get("/rolldice",(req, res)=>{
      let diceval =Math.floor(Math.random()*6)+1;
      res.randor("rolldice.ejs",{num :diceval});
})


app.get("/",(req, res)=>{
      res.render("home.ejs");
})

app.get("/hello",(req, res)=>{
      res.send("hello");
})
app.get("*",(req, res)=>{
      res.send("hello");
})
app.listen(port,()=>{
      console.log(`listen on port ${port}`);
});

