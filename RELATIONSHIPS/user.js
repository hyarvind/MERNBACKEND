const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Error connecting to DB:", err));

const UserSchema = new Schema({
  username: String,
  addresses: [
    {
      _id: false,
      location: String,
      city: String,
    },
  ],
});

const User = mongoose.model("User", UserSchema);

const addUsers = async () => {
  let user1 = new User({
    username: "sherlockholmes",
    addresses: [
      {
        location: "221b banker",
        city: "delhi"
      }
    ]
  });
  user1.addresses.push({ location: "ghorasahan basedhwa", city: "randpur" });
  try {
    let result = await user1.save();
    console.log("User saved:", result);
  } catch (err) {
    console.log("Error saving user:", err);
  }
};

addUsers();
