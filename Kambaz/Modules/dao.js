import model from "./model.js";
import { v4 as uuidv4 } from "uuid";

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });

export const createModule = (module) => {
  // delete user._id;
  const newModule = { _id: uuidv4(), ...module };
  return model.create(newModule);
};

export const findModulesForCourse = (courseId) => {
  return model.find({ course: courseId });
}

export const updateModule = (moduleId, moduleUpdates) =>
  model.updateOne({ _id: moduleId }, { $set: moduleUpdates });