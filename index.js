require("dotenv").config();
const express = require("express");
const connectDB = require("./db");
const app = express();

app.use(express.json());




// app.use("/api", router);


async function connect() {
    try {
      app.listen(8080, () => {
        connectDB(process.env.MONGODB_PASSWORD);
        console.log("server is running on  port 8080");
      });
    } catch (err) {
      console.log(err);
    }
  }
  connect();
  
  