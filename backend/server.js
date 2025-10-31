const express = require( "express");
const mongoose = require( "mongoose");
const dotenv = require( "dotenv");
const cors = require( "cors");

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.error("DB Connection Error:", err));

app.get("/", (req, res) => {
  res.send("Tourism Web App API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
