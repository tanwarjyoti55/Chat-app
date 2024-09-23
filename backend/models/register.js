import mongoose from "mongoose";

const registerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    instaID: {
      type: String,
      required: true,
      unique: true,
    },
    linkedinId: {
      type: String,
      required: true,
      unique: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model("Register", registerSchema);

export default Register;
