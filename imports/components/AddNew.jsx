import React from "react";

export function AddNew({ name, onClick, setName }) {
  return (
    <div className="container">
      <label className="col" htmlFor="clientName">
        <strong>{name} Name</strong>
      </label>
      <input
        className="col"
        type="text"
        placeholder={`${name} Name`}
        name="clientName"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <button className="col" onClick={onClick}>
        Add new {name}
      </button>
    </div>
  );
}
