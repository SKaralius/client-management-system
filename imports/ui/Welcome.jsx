import React from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";

export function Welcome() {
  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      <Hello />
      <Info />
    </div>
  );
}
