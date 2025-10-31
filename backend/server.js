const express = require( "express");
const mongoose = require( "mongoose");
const dotenv = require( "dotenv");
const cors = require( "cors");
const connectDB = require("./Database/Config/connection");

dotenv.config();
const app = express();

const userRoutes =  require ("./Routes/userRoute");

app.use(express.json());
app.use(cors());

connectDB();


app.use("/api/user", userRoutes);


app.get("/", (req, res) => {
  res.send("Tourism Web App API is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
