import React from "react";
import { Link } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Logout } from "./Logout";
import { ListLink } from "../components/ListLink";

export function Navbar() {
  const user = useTracker(() => Meteor.user());
  return (
    <nav
      className="navbar navbar-expand navbar-dark bg-dark"
      aria-label="Second navbar example"
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Client Management System
        </Link>

        <div className="collapse navbar-collapse" id="navbarsExample02">
          <ul className="navbar-nav me-auto container-sm">
            {user ? (
              <>
                <ListLink route="/clients" text="Clients" />
                <ListLink route="/orders" text="Orders" />
                <ListLink route="/items" text="Items" />
                <Logout />
              </>
            ) : (
              <>
                <ListLink route="/login" text="Log In" />
                <ListLink route="/register" text="Register" />
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
