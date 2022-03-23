//admin.js

//import firebase admin package and initialize firestore database object
//we will export so other modules can use it

const admin = require("firebase-admin");

admin.initializeApp();
const db = admin.firestore();

module.exports = { admin, db };
