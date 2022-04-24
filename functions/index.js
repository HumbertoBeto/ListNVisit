//index.js
//Express setup for APIs
//setting up routes for APIs

const functions = require("firebase-functions");
const app = require("express")();
//const axios = require("axios");

const {
  getAllDestinations,
  postOneDestination,
  deleteDestination,
  editDestination,
  searchDestinations,
} = require("./APIs/destinations");

app.get("/destinations", getAllDestinations);
app.post("/searchDestinations", searchDestinations);
app.post("/destination", postOneDestination);
app.delete("/destination/:destinationId", deleteDestination);
app.put("/destination/:destinationId", editDestination);

exports.api = functions.https.onRequest(app);
