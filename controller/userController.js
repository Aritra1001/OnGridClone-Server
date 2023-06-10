const { UserModel } = require("../model/userModel");

const signup = async (req, res) => {
  console.log("Signup is called..");

  const { name, email, phone } = req.body;
  try {
    // Validating Inputs
    if (!name || !email || !phone) {
      res
        .status(403)
        .send({ message: "Please enter complete details to signup" });
    }

    // Checking existing user
    const existingUser = await UserModel.findOne({ email: email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User is already registered, please sign in",
      });
    }

    // Saving user in DB
    const user = await new UserModel({
      name,
      email,
      phone,
    }).save();

    res.status(200).send({
      success: true,
      message: "User SignedUp successfully",
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .send({ message: "Some error occurred while performing signup" });
  }
};

module.exports = {
  signup,
};
