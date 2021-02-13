import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useParams, useRouteMatch } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { ItemsCollection } from "../db/items";
import { OrdersCollection } from "../db/orders";
import { ClientsCollection } from "../db/clients";

export function SingleItem() {
  const { path } = useRouteMatch();
  function GetDbAndName() {
    if (path.includes("orders"))
      return { db: OrdersCollection, displayName: "orders" };
    if (path.includes("items"))
      return { db: ItemsCollection, displayName: "items" };
    if (path.includes("clients"))
      return { db: ClientsCollection, displayName: "clients" };
  }

  const { id } = useParams();
  const { db, displayName } = GetDbAndName();
  const item = useTracker(() => {
    Meteor.subscribe(displayName);
    return db.findOne({
      _id: { $eq: id },
    });
  });
  const [itemName, setItemName] = useState(item.name);

  function submitUpdate() {
    Meteor.call(
      `${displayName}.update`,
      {
        _id: { $eq: id },
      },
      itemName
    );
  }

  return (
    <div className="my-5 container-fluid">
      <h1 className="my-5">Displaying {item.name}</h1>
      <label htmlFor="name">Name</label>

      <input
        name="name"
        type="text"
        placeholder={itemName}
        value={itemName}
        className="mx-auto"
        onChange={(e) => setItemName(e.target.value)}
      />
      <button onClick={submitUpdate}>Update</button>
    </div>
  );
}
