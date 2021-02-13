import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { OrdersCollection } from "../db/orders";
import { DisplayList } from "../components/DisplayList";

export function Orders() {
  const [orderName, setOrderName] = useState("");

  function addOrder() {
    Meteor.call("orders.insert", orderName);
  }

  const orders = useTracker(() => {
    return OrdersCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <DisplayList list={orders} />
      <label htmlFor="orderName">Order Name</label>
      <input
        type="text"
        placeholder="Order Name"
        name="orderName"
        required
        onChange={(e) => setOrderName(e.target.value)}
      />
      <button onClick={() => addOrder()}>Add new Order</button>
    </div>
  );
}
