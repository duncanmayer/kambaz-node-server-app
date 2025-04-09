import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    course: String,
    available: String,
    description: String,
    due: String,
    points: String,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
