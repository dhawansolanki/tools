import React from "react";
import { Route, Switch } from "react-router";

import Blog from "./Blog";
import Post from "./Post";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      
      <Route path="/post/:slug" component={Post} />
    </Switch>
  );
}
