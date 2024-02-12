// // mongodb+srv://manii:<password>@cluster0.bditt1m.mongodb.net/?retryWrites=true&w=majority

const conn_str = "mongodb+srv://manii:hellomanisha@cluster0.bditt1m.mongodb.net/timeline-app?retryWrites=true&w=majority";
// //please replace username password and database name
// const mongoose = require("mongoose");
// mongoose.connect(conn_str)
// .then(() => console.log("Connected successfully..."))
// .catch( (error) => console.log(error) );

// const express = require("express");
// const app = express();
// const port=8989;
// app.use(express.json());

// const bodyParser = require("body-parser");
// const cors = require("cors");

 
// app.use(cors());
// app.use(bodyParser.json());
 
// app.post("/api/saveData", (req, res) => {
//   const daysData = req.body;
 
  
// });
 
 
// app.get("/",(req,res)=>
// {
//     res.send("app is running");
// })
// // const empSchema = new mongoose.Schema({});
// // const emp = new mongoose.model("emps", empSchema);
// // var cors = require('cors')
// // app.use(cors())
// // app.get("/employees", async (req, res) => {
// // // var data = [{name: "hari", salary: 25000}, {name: "sameer", salary: 23000}]
// // let data = await emp.find();
// // res.send(data)
// // })

// app.get("/users",(req,res)=>
// {
//     res.send("users page");
// })
// app.get("/users/:id",(req,res)=>
// {
//     res.send("users with id");
// })

// app.post("/users",(req,res)=>
// {
//     res.send("users  post page");
// })
// app.post("/users/:id",(req,res)=>
// {
//     res.send("users post with id");
// })

// app.put("/users",(req,res)=>
// {
//     res.send("users put");
// })
// app.delete("/users",(req,res)=>
// {
//     res.send("users delete");
// })

// app.listen(port, () => {
// console.log("listening 8989...");
// });


const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 8989;

// Middleware
app.use(express.json()); // This line is enough for parsing application/json
const cors = require("cors");
app.use(cors());

// Connect to MongoDB
mongoose.connect(conn_str, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected successfully..."))
.catch((error) => console.log(error));

// Schema and Model
const dayDataSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.Mixed, required: true }, // Mixed to accommodate both numeric and string IDs
  Mon: { type: Number, default: 0 },
  Tue: { type: Number, default: 0 },
  Wed: { type: Number, default: 0 },
  Thur: { type: Number, default: 0 },
  Fri: { type: Number, default: 0 },
  Sat: { type: Number, default: 0 },
  Sun: { type: Number, default: 0 },
}, { strict: false }); // Allows for flexible keys

const DayData = mongoose.model('DayData', dayDataSchema);

// Route to save data
app.post("/api/saveData", async (req, res) => {
  const daysData = req.body;

  try {
    // Process each item in the array and save to DB
    await Promise.all(daysData.map(data => {
      const newDayData = new DayData(data);
      return newDayData.save();
    }));

    res.status(201).send('Data saved successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error saving data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
