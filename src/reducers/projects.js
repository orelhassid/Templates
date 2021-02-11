import { PROJECTS } from "../config";
import { FETCH, CREATE, DELETE } from "../config/actionsTypes";
import { initialProjects } from "../contexts/initials";

const projectsReducer = (projects = initialProjects, { type, payload }) => {
  let newProjects;
  // console.log("Projects Reducer", { projects, type, payload });
  switch (type) {
    case FETCH:
      return payload;
    case CREATE:
      newProjects = [...projects, { ...payload }];
      localStorage.setItem(PROJECTS, JSON.stringify(newProjects));
      return newProjects;

    case DELETE:
      newProjects = projects.filter(({ id }) => id !== payload.id);
      localStorage.setItem(PROJECTS, JSON.stringify(newProjects));
      return newProjects;

    default:
      return projects;
  }
};

export default projectsReducer;
