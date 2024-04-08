const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI).then((data) => {
  console.log(`Database is connected to ${data.connection.host}`);
});
