import { v4 as uuidv4 } from "uuid";
import model from "./model.js";
import * as answersDao from "../Answers/dao.js";

export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });

export const createQuiz = (quiz) => {
  // Do we need to manually set each questions _id?
  const newQuiz = { ...quiz, _id: uuidv4() };
  return model.create(newQuiz);
};

export const findQuizzesForCourse = (courseId) => {
  return model.find({ course: courseId });
};

// TO DO HANNAH UR HERE
export const findQuizzesByPartialName = (courseId, partialName) => {
  console.log("Partial name", partialName);
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  console.log("Regex", regex);
  const quizzes = model.find({
    course: courseId,
    title: { $regex: regex },
  });
  console.log("Quizzes matching partial name:", quizzes);
  console.log("Number of quizzes found:", quizzes.length);
  return model.find({
    course: courseId,
    title: { $regex: regex },
  });
};

export const findQuizById = (quizId) => {
  return model.findById(quizId);
};

export const updateQuiz = (quizId, quiz) => {
  console.log("HERE UPDATING QUIZ: ", quiz);
  return model.updateOne({ _id: quizId }, { $set: quiz });
};

export const createUserAnswer = async (quizId, userId, quizData) => {
  const userAnswer = {
    user: userId,
    quiz: quizId,
    answered: quizData,
  };
  //   console.log(JSON.stringify(userAnswer));
  return answersDao.createUserAnswer(userAnswer);
};

export const findQuizAnswersForUser = async (userId, quizId) => {
  const answers = await answersDao.findQuizAnswersForUser(userId, quizId);
  return answers;
};
