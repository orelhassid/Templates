import { PROJECTS } from "../config";
import { FETCH, CREATE, DELETE } from "../config/actionsTypes";
import { v4 as uuidv4 } from "uuid";
import { slugGenerator, slugGeneratorArray } from "../utils/string";

export const createProject = (project) => async (dispatch) => {
  try {
    const payload = project;
    payload.id = uuidv4();
    payload.slug = slugGenerator(project.title);
    dispatch({ type: CREATE, payload });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProjects = () => async (dispatch) => {
  try {
    let projects = JSON.parse(localStorage.getItem(PROJECTS)) || [];

    slugGeneratorArray(projects, "title");

    if (typeof projects?.tags !== "object") Array(projects?.tags);

    dispatch({ type: FETCH, payload: projects });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProject = (project) => async (dispatch, state) => {
  try {
    dispatch({ type: DELETE, payload: project });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
