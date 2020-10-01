import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MenuLayout = React.lazy(() => import("@/layouts/MainLayout"));
const ProfilePage = React.lazy(() => import("./Profile"));

const Pages = () => (
  <MenuLayout>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/profile" />} />
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </MenuLayout>
);

export default Pages;
