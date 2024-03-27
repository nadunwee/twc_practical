require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRouter = require("./routes/contactRoute.jsx");
const userRouter = require("./routes/user.jsx");

const app = express();

//middleware
app.use(express.json());

app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/", contactRouter);
app.use("/", userRouter);

// Connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connect to DB and listning on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
