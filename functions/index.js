//index.js
//Express setup for APIs
//setting up routes for APIs

const functions = require("firebase-functions");
const app = require("express")();

const { getAllDestinations } = require("./APIs/destinations");

app.get("/destinations", getAllDestinations);
exports.api = functions.https.onRequest(app);
