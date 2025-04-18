import mongoose from "mongoose";
const quizSchema = new mongoose.Schema(
  {
    _id: String,
    title: String,
    description: String,
    instructions: String,
    course: { type: String, ref: "CourseModel" },
    quiz_type: {
      type: String,
      enum: [
        "Graded Quiz",
        "Practice Quiz",
        "Graded Survey",
        "Ungraded Survey",
      ],
      default: "Graded Quiz",
    },
    // no points field, it is calculated based on the question point summation
    assignment_group: {
      type: String,
      enum: ["Quizzes", "Exams", "Assignments", "Projects"],
      default: "Quizzes",
    },
    shuffle_answers: Boolean,
    has_time_limit: Boolean,
    time_limit: Number,
    allow_multiple_attempts: Boolean,
    num_attempts: Number,
    show_correct_answers: Boolean,
    show_correct_answers_date: Date,
    access_code: String,
    one_question_at_a_time: Boolean,
    webcam_required: Boolean,
    lock_questions_after_answering: Boolean,
    is_published: Boolean,
    due_date: Date,
    avail_date: Date,
    until_date: Date,
    questions: [
      {
        _id: String,
        question_title: String,
        question_text: String,

        question_type: {
          type: String,
          enum: ["Multiple Choice", "True or False", "Fill in the Blank"],
        },
        question_points: Number,
        answers: [
          {
            answer_text: String,
            is_correct: Boolean,
          },
        ],
      },
    ],
  },
  { collection: "quizzes" }
);
export default quizSchema;
