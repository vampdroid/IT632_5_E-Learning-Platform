require("dotenv").config();

//packages
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DataBase Connected...");
  })
  .catch((err) => {
    console.log(err);
});

const userRouter = require('./app/routes/user');
app.use('/users',userRouter);

const categoryRouter = require('./app/routes/category');
app.use('/category',categoryRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});

