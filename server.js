const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

require("./config/conn");
const helloRoute = require("./routes/hello.route");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use("/hello", helloRoute);

app.get("/", (req, res) => {
  res.send(`Node server is running at port: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is connected at PORT: ${PORT}`);
});
