import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Login } from "./Login";
import { Register } from "./Register";

export const App = () => (
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
        <div>
          <h1>Welcome to Meteor!</h1>
          <Hello />
          <Info />
        </div>
      </Route>
    </Switch>
  </>
);
