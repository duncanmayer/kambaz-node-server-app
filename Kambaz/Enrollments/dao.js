import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const enrollUserInCourse = (userId, courseId) => {
  // delete user._id;
  const newEnrollment = { _id: uuidv4(), user: userId, course: courseId };
  return model.create(newEnrollment);
};

export const unenrollUserFromCourse = (userId, courseId) => {
  return model.deleteOne({ user: userId, course: courseId });
};

export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  return enrollments.map((enrollment) => enrollment.course);
}
export async function findUsersForCourse(courseId) {
  const enrollments = await model.find({ course: courseId }).populate("user");
  return enrollments.map((enrollment) => enrollment.user);
}
