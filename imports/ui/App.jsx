import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import { Login } from "./Login";
import { Register } from "./Register";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Welcome } from "./Welcome";
import { Clients } from "./Clients";
import { Orders } from "./Orders";
import { Items } from "./Items";
import { SingleItem } from "./SingleItem";

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
        {user ? (
          <>
            <Route exact path="/clients">
              <Clients />
            </Route>
            <Route exact path="/orders">
              <Orders />
            </Route>
            <Route exact path="/items">
              <Items />
            </Route>
            <Route path="/clients/:id">
              <SingleItem />
            </Route>
            <Route path="/orders/:id">
              <SingleItem />
            </Route>
            <Route path="/items/:id">
              <SingleItem />
            </Route>
            <Route exact path="/">
              <Welcome />
            </Route>
          </>
        ) : (
          <Welcome />
        )}
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </>
  );
};
