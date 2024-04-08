const Hello = require("../model/hello.model");

exports.getUsers = async (req, res, next) => {
  try {
    const hello = await Hello.find({});
    if (hello.length === 0) {
      return res.status(200).send("No users have registered yet!");
    }
    res.status(200).json(hello);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const hello = await Hello.findById(req.params.id);
    if (!hello) {
      return res.status(200).send("No user available");
    }
    res.status(200).json(hello);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const hello = await Hello.create(req.body);
    res.status(200).json(hello);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const hello = await Hello.findByIdAndUpdate(req.params.id, req.body);
    if (!hello) {
      return res.status(404).send("No user found with the given id");
    }
    const updatedHello = await Hello.findById(req.params.id);
    res.status(200).json(updatedHello);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const hello = await Hello.findByIdAndDelete(req.params.id);
    if (!hello) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
