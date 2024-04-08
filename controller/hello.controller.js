const Hello = require("../model/hello.model");

exports.getUsers = async (req, res, next) => {
  try {
    const hello = await Hello.find({});
    if (hello.length === 0) {
      return res.status(200).send("No users have registered yet!");
    }
    res.status(200).json({ hello });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
