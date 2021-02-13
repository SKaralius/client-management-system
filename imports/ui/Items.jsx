import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ItemsCollection } from "../db/items";
import { DisplayList } from "../components/DisplayList";
import { AddNew } from "../components/AddNew";

export function Items() {
  const [itemName, setitemName] = useState("");

  function updateName(name) {
    setitemName(name);
  }

  function additem() {
    Meteor.call("items.insert", itemName);
  }

  const items = useTracker(() => {
    Meteor.subscribe("items");
    return ItemsCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <DisplayList list={items} />
      <AddNew name="Item" onClick={additem} setName={updateName} />
    </div>
  );
}
