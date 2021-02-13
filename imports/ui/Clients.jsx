import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ClientsCollection } from "../db/clients";
import { DisplayList } from "../components/DisplayList";

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
      <DisplayList list={clients} />
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
