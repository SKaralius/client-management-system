import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ClientsCollection } from "../db/clients";

export function Clients() {
  const [clientName, setClientName] = useState("");

  function addClient() {
    Meteor.call("clients.insert", clientName);
  }

  const clients = useTracker(() => {
    return ClientsCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client._id}>
              {client.name} <button>Edit</button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="clientName">Client Name</label>
      <input
        type="text"
        placeholder="Client Name"
        name="clientName"
        required
        onChange={(e) => setClientName(e.target.value)}
      />
      <button onClick={() => addClient()}>Add new Client</button>
    </div>
  );
}