import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (password == passwordRepeat)
      Meteor.call("accounts.insert", username, password);
    else alert("Passwords do not match");
  };

  return (
    <form onSubmit={submit} className="">
      <label htmlFor="username">Username</label>

      <input
        type="text"
        placeholder="Username"
        name="username"
        required
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password</label>

      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="password2">Repeat your Password</label>

      <input
        type="password"
        placeholder="Repeat your password"
        name="password2"
        required
        onChange={(e) => setPasswordRepeat(e.target.value)}
      />

      <button type="submit">Log In</button>
    </form>
  );
}
