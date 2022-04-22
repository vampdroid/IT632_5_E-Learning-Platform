require("dotenv").config();

//packages
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 4000;

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

const userRouter = require('./routes/user');
app.use('/users',userRouter);

const categoryRouter = require('./routes/category');
app.use('/category',categoryRouter);

const addressRouter = require('./app/routes/address');
app.use('/address',addressRouter);

const enrollRouter = require('./app/routes/enrollment');
app.use('/enroll',enrollRouter);

const courseRouter = require('./app/routes/course');
app.use('/course',courseRouter);

const discussionRouter = require('./app/routes/discussion');
app.use('/discuss',discussionRouter);

app.listen(port,()=>{
    console.log(`Server is running on port:${port}`);
});

