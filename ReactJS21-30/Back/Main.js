import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Content from "./Content";

const Main = () => {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${path}/:isi`}>
          <Content></Content>
        </Route>
      </Switch>
    </div>
  );
};

export default Main;
