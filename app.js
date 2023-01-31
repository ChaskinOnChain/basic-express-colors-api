const express = require("express");
const app = express();

const colorsRouter = require("./routers/colorsRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/colors/", colorsRouter);

app.listen(8000, () => {
  console.log("Server running on Port 8000");
});
