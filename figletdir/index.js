const figlet =require("figlet");
figlet("Arvind Kumar", function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    });
// figlet("Yadav Ji ", function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       console.log(data);
//     });
// figlet("ka hal Ba", function (err, data) {
//       if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//       }
//       console.log(data);
//     });