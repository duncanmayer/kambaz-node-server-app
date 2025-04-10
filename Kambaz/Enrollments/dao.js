import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const enrollUserInCourse = (userId, courseId) => {
  // delete user._id;
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  console.log("enrollment is " + JSON.stringify(newEnrollment));
  return model.create(newEnrollment);
};

export const unenrollUserFromCourse = (userId, courseId) => {
  return model.deleteOne({ user: userId, course: courseId });
};
