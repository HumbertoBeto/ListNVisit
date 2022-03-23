//index.js
//Express setup for APIs
//setting up routes for APIs

const functions = require("firebase-functions");
const app = require("express")();

const {
  getAllDestinations,
  postOneDestination,
  deleteDestination,
  editDestination,
} = require("./APIs/destinations");

app.get("/destinations", getAllDestinations);
app.post("/destination", postOneDestination);
app.delete("/destination/:destinationId", deleteDestination);
app.put("/destination/:destinationId", editDestination);

exports.api = functions.https.onRequest(app);
