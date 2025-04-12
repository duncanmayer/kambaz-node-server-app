import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const deleteAnswer = (answerId) => model.deleteOne({ _id: answerId });

export const createUserAnswer = (answer) => {
  // delete user._id;
  const newAnswer = { ...answer, _id: uuidv4() };
  return model.create(newAnswer);
};

export const findAnswersForUser = (userId) => {
  return model.find({ user: userId });
};

export const findAnswersForCourse = (courseId) => {
    return model.find({ course: courseId });
  };

export const findQuizAnswersForUser = (userId, quizId) => {
  return model.find({ user: userId, quiz: quizId });
}
  
export const findAnswerById = (answerId) => {
  return model.findById(answerId);
};

export const updateAnswer = (answerId, answer) => {
  return model.updateOne({ _id: answerId }, { $set: answer });
};
