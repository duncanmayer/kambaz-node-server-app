import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";
import { v4 as uuidv4 } from "uuid";


export const findAllCourses = () => model.find();

export const findCoursesForEnrolledUser = async (userId) => {
  const enrollments = await enrollmentModel.find({ user: userId });

  const courseIds = enrollments.map((e) => e.course);


  return model.find({ _id: { $in: courseIds } });
}


export const createCourse = async (course) => {
  const newCourse = { ...course, _id: uuidv4() };
  await model.create(newCourse);
  return newCourse;
};

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });


export const updateCourse = (courseId, course) =>
  model.updateOne({ _id: courseId }, { $set: course });
