import React from "react";
import { Meteor } from "meteor/meteor";

export function Logout() {
  return (
    <li className="nav-item">
      <button
        className="btn btn-secondary"
        aria-current="page"
        onClick={() => Meteor.logout()}
      >
        Log out
      </button>
    </li>
  );
}
