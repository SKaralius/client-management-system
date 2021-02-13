import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Login } from "./Login";
import { Register } from "./Register";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Welcome } from "./Welcome";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
};
