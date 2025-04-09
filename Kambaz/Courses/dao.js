import model from "./model.js";
import enrollmentModel from "../Enrollments/model.js";
import { v4 as uuidv4 } from "uuid";


export const findAllCourses = () => model.find();

// export function findCoursesForEnrolledUser(userId) {
//   const { courses, enrollments } = Database;
//   const enrolledCourses = courses.filter((course) =>
//     enrollments.some(
//       (enrollment) =>
//         enrollment.user === userId && enrollment.course === course._id
//     )
//   );
//   return enrolledCourses;
// }

export const findCoursesForEnrolledUser = async (userId) => {
  const enrollments = await enrollmentModel.find({ user: userId });
  console.log("enrollments are " + JSON.stringify(enrollments));

  const courseIds = enrollments.map((e) => e.course);


  return model.find({ _id: { $in: courseIds } });
}


export const createCourse = (course) => {
  // delete user._id;
  const newCourse = { ...course, _id: uuidv4() };
  return model.create(newUser);
};

export const deleteCourse = (courseId) => model.deleteOne({ _id: courseId });


export const updateCourse = (courseId, course) =>
  model.updateOne({ _id: courseId }, { $set: course });
