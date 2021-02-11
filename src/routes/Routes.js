import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RT_LOGIN, RT_LOGOUT, RT_PROJECTS, RT_USERS } from "../config/routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Project from "../pages/projects/Project";
import Profile from "../pages/user/ProfileLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
  return (
    <Switch>
      <Route path={`${RT_PROJECTS}/:project`} component={Project} />
      <ProtectedRoute path="/user/:page?/:subpage?" component={Profile} />
      <Route path={RT_LOGIN} component={Login} />
      <Route path={RT_LOGOUT} component={Logout} />
      <Route path={RT_USERS} component={Users} />
      <Route exact path="/not-found" component={NotFound} />
      <Route exact path="/" component={Home} />
      <Redirect to="/not-found" />
    </Switch>
  );
}
