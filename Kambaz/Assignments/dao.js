import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assgn) => assgn._id !== assignmentId);
}

export function createAssignment(assignment) {
  const newAssignment = { ...assignment, _id: uuidv4() };
  Database.assignments = [...Database.assignments, newAssignment];
  return newAssignment;
}

export function findAssignmentsForCourse(courseId) {
  const { assignments } = Database;
  return assignments.filter((assgn) => assgn.course === courseId);
}

export function findAssignmentById(assignmentId) {
    const { assignments } = Database;
    return assignments.find((assgn) => assgn._id === assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  console.log(`assignmentId : ${assignmentId}`);
  const assignment = assignments.find((assgn) => assgn._id === assignmentId);
  console.log(`assignment is : ${JSON.stringify(assignment)}`);
  console.log(`assignmentUpdates : ${JSON.stringify(assignmentUpdates)}`);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
