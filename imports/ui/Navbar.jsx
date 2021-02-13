import React from "react";
import { Link } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { Logout } from "./Logout";

export default function Navbar() {
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
          <ul className="navbar-nav me-auto">
            {user ? (
              <Logout />
            ) : (
              <>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/login"
                  >
                    Log In
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
