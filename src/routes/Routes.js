import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { RT_LAB, RT_LOGIN, RT_LOGOUT, RT_USERS } from "../config/routes";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Lab from "../pages/Lab";
import Logout from "../pages/Logout";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import Profile from "../pages/user/ProfileLayout";
import ProtectedRoute from "./ProtectedRoute";

export default function Routes() {
  return (
    <Switch>
      <ProtectedRoute path="/user" component={Profile} />
      <Route path={RT_LOGIN} component={Login} />
      <Route path={RT_LAB} component={Lab} />
      <Route path={RT_LOGOUT} component={Logout} />
      <Route path={RT_USERS} component={Users} />
      <Route exact path="/not-found" component={NotFound} />
      <Route exact path="/" component={Home} />
      <Redirect to="/not-found" />
    </Switch>
  );
}
