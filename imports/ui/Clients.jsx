import React, { useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ClientsCollection } from "../db/clients";
import { DisplayList } from "../components/DisplayList";
import { AddNew } from "../components/AddNew";

export function Clients() {
  const [clientName, setClientName] = useState("");

  function updateName(name) {
    setClientName(name);
  }

  function addClient() {
    Meteor.call("clients.insert", clientName);
  }

  const clients = useTracker(() => {
    Meteor.subscribe("clients");
    return ClientsCollection.find({}).fetch() || [];
  });

  return (
    <div>
      <DisplayList list={clients} />
      <AddNew name="Client" onClick={addClient} setName={updateName} />
    </div>
  );
}
