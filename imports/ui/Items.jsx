import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ItemsCollection } from "../db/items";

export function Items() {
  const [itemName, setitemName] = useState("");

  function additem() {
    Meteor.call("items.insert", itemName);
  }

  const items = useTracker(() => {
    return ItemsCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <ul>
        {items.map((item) => {
          return (
            <li key={item._id}>
              {item.name} <button>Edit</button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="itemName">Item Name</label>
      <input
        type="text"
        placeholder="item Name"
        name="itemName"
        required
        onChange={(e) => setitemName(e.target.value)}
      />
      <button onClick={() => additem()}>Add new item</button>
    </div>
  );
}
