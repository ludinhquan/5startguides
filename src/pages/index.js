import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

const MainLayout = React.lazy(() => import("@/layouts/MainLayout"));
const ProfilePage = React.lazy(() => import("./Profile"));
const TourCreation = React.lazy(() => import("./Tour/TourCreation"));
const TourEdit = React.lazy(() => import("./Tour/TourEdit"));
const TourManagement = React.lazy(() => import("./Tour/TourManagement"));

const Pages = () => (
  <Switch>
    <Route
      exact
      path="/login"
      render={() => <h1 style={{ textAlign: "center" }}>Login Page</h1>}
    />
    <MainLayout>
      <Switch>
        <Route path="/" exact render={() => <Redirect to="/profile" />} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/create-tour" component={TourCreation} />
        <Route path="/edit-tour/:id" component={TourEdit} />
        <Route path="/tours" component={TourManagement} />
      </Switch>
    </MainLayout>
  </Switch>
);

export default Pages;
