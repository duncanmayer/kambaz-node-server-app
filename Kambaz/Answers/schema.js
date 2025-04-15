import mongoose from "mongoose";
const answerSchema = new mongoose.Schema(
  {
    _id: String,
    user:  { type: String, ref: "UserModel" },
    quiz:  { type: String, ref: "QuizModel" },
    answered: [
        {
          question_id: String, // the id of the question within quiz object
          chosenAnswer: String
        },
      ],
      score: Number,
  },
  { collection: "answers" }
);
export default answerSchema;
