import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./Routes/Auth";
import Home from "./Routes/Home";
import PostCreate from "./Routes/Post/PostCreate";
import PostDetail from "./Routes/Post/PostDetail";
import Profile from "./Routes/Profile";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true} component={Home} />
      <Route path={"/auth"} exact={true} component={Auth} />
      <Route path={"/newPost"} exact={true} component={PostCreate} />
      <Route path={"/post/:id"} exact={true} component={PostDetail} />
      <Route path={"/profile/:id"} exact={true} component={Profile} />
    </Switch>
  </BrowserRouter>
);
