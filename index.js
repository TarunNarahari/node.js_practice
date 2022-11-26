const express = require("express");
// Initialize express
const app = express();
const PORT = process.env.PORT || 8080;

// parse JSON
app.use(express.json());
// parse URL encoded data
app.use(express.urlencoded({ extended: true }));
//This method returns all  the users in database
app.get("/", (req,res) => {
  res.json({ message: "Hello WorlD." });
});



