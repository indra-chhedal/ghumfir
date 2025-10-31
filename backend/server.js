const express = require( "express");
const mongoose = require( "mongoose");
const dotenv = require( "dotenv");
const cors = require( "cors");
const connectDB = require("./Database/Config/connection");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("Tourism Web App API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
