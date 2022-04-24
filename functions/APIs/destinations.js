//destinations.js

//dateTime in YYYY-MM-DD HH:MM:SS
//add rating
//add address
const axios = require("axios");

const { db } = require("../util/admin"); //include db connection
//const axios = require;

exports.getAllDestinations = (request, response) => {
  //call specific database collection
  db.collection("destinations")
    .orderBy("createdAt", "desc") //order it by dateTime attribute
    .get() //make the call
    .then((data) => {
      let destinations = []; //empty array to store data
      data.forEach((doc) => {
        //loop through response data and push to local array
        destinations.push({
          destinationId: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt,
          arrivalDateTime: doc.data().arrivalDateTime,
          address: doc.data().address,
          lat: doc.data().lat,
          lng: doc.data().lng,
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

//Add a new destination item
exports.postOneDestination = (request, response) => {
  //conditions for mandatory data
  console.log("Name: ", request.body);
  if (request.body.name.trim() === "") {
    return response.status(400).json({ name: "Must not be empty" });
  }

  if (request.body.arrivalDateTime.trim() === "") {
    return response.status(400).json({ arrivalDateTime: "Must not be empty" });
  }

  if (request.body.address.trim() === "") {
    return response.status(400).json({ address: "Must not be empty" });
  }

  if (request.body.lat == "") {
    return response.status(400).json({ lat: "Must not be empty" });
  }

  if (request.body.lng == "") {
    return response.status(400).json({ lat: "Must not be empty" });
  }

  // create object for new Destination item
  const newDestinationItem = {
    name: request.body.name,
    arrivalDateTime: request.body.arrivalDateTime,
    createdAt: new Date().toISOString(),
    address: request.body.address,
    lat: request.body.lat,
    lng: request.body.lng,
    note: request.body.note,
    rating: request.body.rating,
    url: request.body.url,
  };

  //add to database then response accordingly
  db.collection("destinations")
    .add(newDestinationItem)
    .then((doc) => {
      const responseDestinationItem = newDestinationItem;
      responseDestinationItem.id = doc.id;
      return response.json(responseDestinationItem);
    })
    .catch((err) => {
      response.status(500).json({ error: "Something went wrong" });
      console.error(err);
    });
};

exports.deleteDestination = (request, response) => {
  const document = db.doc(`/destinations/${request.params.destinationId}`); //create search query with parameter from request
  document
    .get() //make the call
    .then((doc) => {
      if (!doc.exists) {
        //if we did not find anything
        return response.status(404).json({ error: "Destination not found" });
      }
      return document.delete(); //delete it
    })
    .then(() => {
      response.json({ message: "Delete successfull" }); //send response for successul deletion
    })
    .catch((err) => {
      //some error occured with the call
      console.error(err);
      return response.status(500).json({ error: err.code });
    });
};

//edit a destination
exports.editDestination = (request, response) => {
  if (request.body.destinationId || request.body.createdAt) {
    response.status(403).json({ message: "Not allowed to edit" });
  }
  let document = db
    .collection("destinations")
    .doc(`${request.params.destinationId}`);
  document
    .update(request.body)
    .then(() => {
      response.json({ message: "Successfully updated" });
    })
    .catch((err) => {
      response.status(500).json({
        error: err.code,
      });
    });
};

exports.searchDestinations = async (request, response) => {
  console.log(request.body);
  console.log(request.body.searchTerm);
  const apiQuery = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${request.body.searchTerm}&key=AIzaSyBsA3aUKWt3O9gMIBTM-eyMH6Zkn6vtnfg`;
  console.log(apiQuery);

  const config = {
    method: "get",
    url: apiQuery,
  };

  try {
    const myResponse = await axios(config);
    //console.log("Search Locations results: ", myResponse.data);
    return response.json(myResponse.data);
  } catch (err) {
    console.log("Error while calling Google API: ", err);
    return response.status(500).json({ error: err.code });
  }
  //call specific database collection
  // db.collection("destinations")
  //   .orderBy("createdAt", "desc") //order it by dateTime attribute
  //   .get() //make the call
  //   .then((data) => {
  //     let destinations = []; //empty array to store data
  //     data.forEach((doc) => {
  //       //loop through response data and push to local array
  //       destinations.push({
  //         destinationId: doc.id,
  //         name: doc.data().name,
  //         createdAt: doc.data().createdAt,
  //         arrivalDateTime: doc.data().arrivalDateTime,
  //         address: doc.data().address,
  //         lat: doc.data().lat,
  //         lng: doc.data().lng,
  //         note: doc.data().note,
  //         rating: doc.data().rating,
  //         url: doc.data().url,
  //       });
  //     });
  //     return response.json(destinations); //return array to client
  //   })
  //   .catch((err) => {
  //     console.error(err); // catch errors if any and log them out
  //     return response.status(500).json({ error: err.code }); //return error if there is an error
  //   });
};
