//destinations.js

//dateTime in YYYY-MM-DD HH:MM:SS
//add rating
//add address

const { db } = require("../util/admin"); //include db connection

exports.getAllDestinations = (request, response) => {
  //call specific database collection
  db.collection("destinations")
    .orderBy("dateTime", "desc") //order it by dateTime attribute
    .get() //make the call
    .then((data) => {
      let destinations = []; //empty array to store data
      data.forEach((doc) => {
        //loop through response data and push to local array
        destinations.push({
          destinationId: doc.id,
          name: doc.data().name,
          dateTime: doc.data().dateTime,
          address: doc.data().address,
          location: doc.data().location,
          note: doc.data().note,
          rating: doc.data().rating,
          url: doc.data().url,
        });
      });
      return response.json(destinations); //return array to client
    })
    .catch((err) => {
      console.error(err); // catch errors if any and log them out
      return response.status(500).json({ error: err.code }); //return error if there is an error
    });
};
