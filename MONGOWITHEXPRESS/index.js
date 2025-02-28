const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}


/// edits route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}= req.params;
    let chat =await Chat.findById(id);
    res.render("edit.ejs",{chat});
})

///updtes routes
app.put("/chats/:id",async(req,res)=>{
  let {id} =req.params;
  let {message :newmessage} =req.body;
  let updatedchat =await Chat.findByIdAndUpdate(
    id,
    {message:newmessage},
    {runValidators:true ,new :true}
  );
  console.log(updatedchat);
  res.redirect("/chats");
  
})
/// destroy route /delete
app.delete("/chats/:id",async(req,res)=>{
    let {id} =req.params;
    let deletechat = await Chat.findByIdAndDelete(id);
    console.log(deletechat);
    
    res.redirect("/chats");
  
})
/// new route
app.get("/chats/new", (req, res) => {
  res.render("new.ejs");
});

////create a route
app.post("/chats",(req,res)=>{
   let {from ,to ,message} = req.body;
    let newChat = new Chat({
        from:from,
        to:to,
        message:message,
        created_at: new Date(),
    });
   newChat.save().then(()=>{
       console.log("chat saved successfully");
   }).catch((err)=>{
       console.log(err);
   })
   res.redirect("/chats");
    
})

///// index route
app.get("/chats", async (req, res) => {
  try {
    // Fetch all chats from the database
    let Chats = await Chat.find();
    res.render("index", { chats: Chats }); // Pass 'Chats' as 'chats' to match the EJS variable
  } catch (err) {
    console.error("Error fetching chats:", err);
    res.status(500).send("Internal Server Error");
  }
});
///// SINGLE CHeak ROUTE
app.get("/",(req,res)=>{
    res.send("root is working ");
})


/// LISTEN TO THE SERVER

app.listen(8080,()=>{
    console.log("server is listening on port 8080");
    
})