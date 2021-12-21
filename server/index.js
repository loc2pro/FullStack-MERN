require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')



const authRouter = require("./routers/auth");
const postRouter = require("./routers/post");

var url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mern-learnit.rpeee.mongodb.net/mern-learnit?retryWrites=true&w=majority`;
const connetDB = async () => {
  try {
    await mongoose.connect(url, {
      // useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connetDB();

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);


const PORT = 8000;

app.listen(PORT, () => console.log(`Server start on Port ${PORT}`));
