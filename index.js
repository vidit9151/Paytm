const cors = require("cors");

const express = require("express");
app.use(cors());
app.use(express.json());
const mainRouter = require("./routes");
const app = express();

app.use("api/v1", mainRouter);
app.listen("3000", () => {
  console.log("server started at port 3000");
});
