const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/amazon")
    .then(() => {
        console.log("Connection successful");
      })
      .catch((err) => console.log(err));


const bookSchema =new mongoose.Schema({
    tittle:{
        type: String,
        required :true,
        maxLength:20,
    },
    auther:{
        type: String,
    },
    price:{
        type: Number,
        min:1,

    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
    genre:[String],

});
const Book =mongoose.model("Book",bookSchema);

/// delete 
// Book.deleteMany({auther:"Rd sharma"}).then((res)=>{
//   console.log(res);
// });

// let book1 = new Book({
//     tittle:"marval",
//     price:700,
//     category:"fiction",
// });
// book1
// .save()
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
// });

// let book2 = new Book({
//     tittle:"physics",
//     auther:"Ak sharma",
//     price:1400,
// });
// book2
// .save()
// .then((res)=>{
//     console.log(res);
    
// })
// .catch((err)=>{
//     console.log(err);
// });







    
