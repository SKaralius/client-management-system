import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { OrdersCollection } from "../db/orders";

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
      <ul>
        {orders.map((order) => {
          return (
            <li key={order._id}>
              {order.name} <button>Edit</button>
            </li>
          );
        })}
      </ul>
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
