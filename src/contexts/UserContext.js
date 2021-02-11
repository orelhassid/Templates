import React, { createContext, useEffect } from "react";
import useThunkReducer from "react-hook-thunk-reducer";

import userReducer from "../reducers/user";
import projectsReducer from "../reducers/projects";
import reposReducer from "../reducers/repos";

import { USER, PROJECTS, REPOS } from "../config";
import { initialProjects, initialUser, initialRepos } from "./initials";

import { fetchProjects } from "../actions/projects";
import { fetchUser } from "../actions/user";

export const UserContext = createContext({});

export default function UserContextProvider({ children }) {
  const [user, dispatchUser] = useThunkReducer(userReducer, () => {
    const userProfile = localStorage.getItem(USER);

    return userProfile ? JSON.parse(userProfile) : initialUser;
  });

  const [projects, dispatchProjects] = useThunkReducer(projectsReducer, () => {
    let projects = JSON.parse(localStorage.getItem(PROJECTS));
    // slugGeneratorArray(projects, "title");
    return projects ? projects : initialProjects;
  });

  const [repos, dispatchRepos] = useThunkReducer(reposReducer, () => {
    let repos = JSON.parse(localStorage.getItem(REPOS));
    return repos ? repos : initialRepos;
  });

  useEffect(() => {
    async function fetch() {
      try {
        await dispatchUser(fetchUser());
      } catch (error) {}
    }
    fetch();
  }, []);

  useEffect(() => {
    localStorage.setItem(USER, JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem(PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(REPOS, JSON.stringify(repos));
  }, [repos]);

  useEffect(() => {
    async function fetch() {
      try {
        await dispatchProjects(fetchProjects());
      } catch (error) {}
    }
    fetch();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        dispatchUser,
        projects,
        dispatchProjects,
        repos,
        dispatchRepos,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
