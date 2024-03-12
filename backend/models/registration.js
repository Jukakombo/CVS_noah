import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    user_email: String,
    user_name: String,
    message: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
