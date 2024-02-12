const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
 
const app = express();
const port = 3001;
 
app.use(cors());
app.use(bodyParser.json());
 
app.post("/api/saveData", (req, res) => {
  const daysData = req.body;
 
  fs.writeFile("data.json", JSON.stringify(daysData), (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving data");
    } else {
      res.status(200).send("Data saved successfully");
    }
  });
});
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
 