const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8000;
const postRoutes = require("./routes/post");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", postRoutes);

mongoose
  .connect("mongodb://localhost:27017/postAssignment", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

app.listen(port, () => {
  console.log(`app running at ${port}`);
});
