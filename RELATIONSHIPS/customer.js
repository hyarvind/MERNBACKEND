const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
  .then(() => {
    console.log("Connection successful");
  })
  .catch((err) => console.log("Error connecting to DB:", err));

const orderSchema = new Schema({
  item: String,
  price: Number,
});

const customerSchema = new Schema(
  {
    name: String,
    order: [
      {
        type: Schema.Types.ObjectId,
        ref: "Order"
      }
    ]
  }
);

const Order = mongoose.model("Order", orderSchema);
const Customer = mongoose.model("Customer", customerSchema);

const addCustomer = async () => {
  let cus1 = new Customer({
    name: "Ravi Kumar",
  });

  let order1 = await Order.findOne({ item: "Chips" });
  let order2 = await Order.findOne({ item: "Chocolate" });

  cus1.order.push(order1);
  cus1.order.push(order2);

  let result = await cus1.save();
  console.log(result);
};

// const addOrders = async () => {
//   let res = await Order.insertMany([
//     { item: "Samosa", price: 15 },
//     { item: "Chips", price: 10 },
//     { item: "Chocolate", price: 40 },
//   ]);
//   console.log(res);
// };

// addOrders();
addCustomer();
