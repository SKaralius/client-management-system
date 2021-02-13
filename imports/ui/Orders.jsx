import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { OrdersCollection } from "../db/orders";
import { DisplayList } from "../components/DisplayList";
import { AddNew } from "../components/AddNew";

export function Orders() {
  const [orderName, setOrderName] = useState("");

  function updateName(name) {
    setOrderName(name);
  }

  function addOrder() {
    Meteor.call("orders.insert", orderName);
  }

  const orders = useTracker(() => {
    Meteor.subscribe("orders");
    return OrdersCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <DisplayList list={orders} />
      <AddNew name="Order" onClick={addOrder} setName={updateName} />
    </div>
  );
}
