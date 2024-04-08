const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });
const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) => {
  res.send(`Node server is running at port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is connected at PORT: ${PORT}`);
});
