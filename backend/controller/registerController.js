import Register from "../models/register.js";
import bcrypt from "bcrypt"; // Import bcrypt to hash passwords

export const create = async (req, res) => {
  try {
    const { username, password, instaID, linkedinId, picture } = req.body;

    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const registerObj = {
      username,
      password: hashedPassword, // Store the hashed password
      instaID,
      linkedinId,
      picture,
    };

    // Create and insert the new user
    const user = await Register.create(registerObj);

    return res.status(201).json({
      success: true,
      data: { user },
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error?.message || "Something went wrong",
    });
  }
};
