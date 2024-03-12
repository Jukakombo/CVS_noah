import mongoose from 'mongoose';
const CommentSchema = mongoose.Schema(
  {
    user_email: String,
  user_name: String,
  message: String,
  },
  { timestamps: true }
);
const Comments =
  mongoose.models.Comments || mongoose.model('Comments', CommentSchema);
export default Comments;
