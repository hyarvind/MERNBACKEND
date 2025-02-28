const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
main()
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatapp");
}
//// to create a chat 
let allChats = [
    {
    from:"arvind",
    to:"ravi",
    message:"hello ravi Whats up",
    created_at: new Date(),
  },
    {
        from:"priya",
        to:"preeti",
        message:"hello ravi Whats up",
        created_at: new Date(),
      },
    {
        from:"guddu",
        to:"arvind",
        message:" Whats up",
        created_at: new Date(),
      },
        {
            from:"krish",
            to:"amit",
            message:"hello krishna Whats up",
            created_at: new Date(),},
            {
                from:"arvind",
                to:"amit",
                message:" Whats up amit",
                created_at: new Date(),
              },
];

Chat.insertMany(allChats);
