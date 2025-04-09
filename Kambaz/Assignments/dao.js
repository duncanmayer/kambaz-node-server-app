import { v4 as uuidv4 } from "uuid";
import model from "./model.js";

export const deleteAssignment = (assignmentId) => model.deleteOne({ _id: assignmentId });

export const createAssignment = (assignment) => {
  // delete user._id;
  const newAssignment = { ...assignment, _id: uuidv4() };
  return model.create(newAssignment);
};

export const findAssignmentsForCourse = (courseId) => {
  return model.find({ course: courseId });
}

export const findAssignmentById = (assignmentId) => {
  return model.findById(assignmentId);
}

export const updateAssignment = (assignmentId, assignment) =>
  model.updateOne({ _id: assignmentId }, { $set: assignment });