import React from "react";
import { Route, Switch } from "react-router-dom";

const MenuLayout = React.lazy(() => import("@/layouts/MainLayout"));
const ProfilePage = React.lazy(() => import("./Profile"));

const Pages = () => (
  <MenuLayout>
    <Switch>
      <Route path="/profile" component={ProfilePage} />
    </Switch>
  </MenuLayout>
);

export default Pages;
