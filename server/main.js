import { Meteor } from "meteor/meteor";
import { LinksCollection } from "/imports/db/links";
import "../imports/api/methods/accountsMethods";
import "../imports/api/methods/clientMethods";
import "../imports/api/methods/orderMethods";
import "../imports/api/methods/itemMethods";
import "../imports/api/publications/clientPublications";
import "../imports/api/publications/orderPublication";
import "../imports/api/publications/itemPublication";

function insertLink({ title, url }) {
  LinksCollection.insert({ title, url, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if (LinksCollection.find().count() === 0) {
    insertLink({
      title: "Do the Tutorial",
      url: "https://www.meteor.com/tutorials/react/creating-an-app",
    });

    insertLink({
      title: "Follow the Guide",
      url: "http://guide.meteor.com",
    });

    insertLink({
      title: "Read the Docs",
      url: "https://docs.meteor.com",
    });

    insertLink({
      title: "Discussions",
      url: "https://forums.meteor.com",
    });
  }
});
