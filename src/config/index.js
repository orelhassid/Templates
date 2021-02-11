export const APP = {
  title: "Hileo",
  tagline:
    "Build a professional and beautiful portfolio in minutes with hileo.",
  description:
    "Learn Web Devlopment, Graphics Design, Productivity: React, Figma, Notion, and more",
  version: "0.0.1",
};

export const USER = "USER";
export const PROJECTS = "PROJECTS";
export const REPOS = "REPOS";
export const TOKEN = localStorage.getItem("token");

export const API = process.env["REACT_APP_API"];

export const GOOGLE_CLIENT_ID = process.env["REACT_APP_GOOGLE_CLIENT_ID"];
export const GOOGLE_CLIENT_SECRET =
  process.env["REACT_APP_GOOGLE_CLIENT_SECRET"];
