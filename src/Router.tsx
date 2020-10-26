import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./Routes/Auth";
import Home from "./Routes/Home";
import PostCreate from "./Routes/Post/PostCreate";
import PostDetail from "./Routes/Post/PostDetail";
import PostEdit from "./Routes/Post/PostEdit";
import Profile from "./Routes/Profile";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={"/"} exact={true} component={Home} />
      <Route path={"/auth"} exact={true} component={Auth} />
      <Route path={"/post/create"} exact={true} component={PostCreate} />
      <Route path={"/post/:id"} exact={true} component={PostDetail} />
      <Route path={"/post/:id/edit"} exact={true} component={PostEdit} />
      <Route path={"/Profile"} exact={true} component={Profile} />
    </Switch>
  </BrowserRouter>
);
