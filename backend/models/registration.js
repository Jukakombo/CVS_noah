import mongoose from "mongoose";
const registrationSchema = mongoose.Schema(
  {
    // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstName: String,
    lastName: String,
    email: String,
    gradeObtain: String,
    dateOfBirth: String,
    sex: String,
    courseCompleted: String,
    StartingYear: String,
    completeYear: String,
    profComment: String,
  },
  { timestamps: true }
);
const Registrations =
  mongoose.models.Registrations ||
  mongoose.model("Registrations", registrationSchema);
export default Registrations;
