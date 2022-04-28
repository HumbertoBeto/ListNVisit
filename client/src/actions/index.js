import list from "../apis/list";
import google from "../apis/google";
import axios from "axios";

import {
  SIGN_IN,
  SIGN_OUT,
  UPDATE_SEARCH_LOCATIONS,
  FETCH_SEARCH_LOCATIONS,
  FETCH_LIST,
  TOGGLE_ADD_FORM,
  ADD_LIST_LOCATION,
  REMOVE_LIST_LOCATION,
  UPDATE_LIST_LOCATION,
} from "./types";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const fetchSearchLocations = () => {
  return {
    type: FETCH_SEARCH_LOCATIONS,
  };
};

//action creator to search for locations using Google places API
//returns a JSON list of locations
export const searchLocations = (searchInput) => async (dispatch) => {
  const dataObj = {
    searchTerm: searchInput,
  };

  console.log(dataObj);
  console.log("ENV API KEY: ", process.env.REACT_APP_PLACES_API_KEY);

  const config = {
    method: "post",
    url: "/searchDestinations",
    data: dataObj,
  };

  try {
    //call API that calls Google places API
    const myResponse = await list(config);
    console.log("Search Locations results: ", myResponse.data);

    //loop through each place and get Photo url that will be used to show pics
    for (let cur of myResponse.data) {
      if (cur.hasOwnProperty("photos") === false) {
        //console.log("MISSING PHOTO REFERENCE");
        cur.picUrl =
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png";
      } else {
        const picUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${cur.photos[0].photo_reference}&key=${process.env.REACT_APP_PLACES_API_KEY}`;
        const config2 = {
          method: "get",
          url: picUrl,
        };
        const myPicResponse = await axios(config2);
        cur.picUrl = myPicResponse.request.responseURL;
      }
      //console.log("MYPICRESPONSE: ", myPicResponse.request.responseURL);
    }

    //dispatch to update search locations & dispatch to fetch latest search locations
    dispatch({ type: UPDATE_SEARCH_LOCATIONS, payload: myResponse.data });
    dispatch({ type: FETCH_SEARCH_LOCATIONS });
  } catch (err) {
    console.log("Error while calling Google API: ", err);
  }
};

//action creator for getting current list of destinations
export const getList = () => async (dispatch) => {
  const config = {
    method: "get",
    url: "/destinations",
  };

  //call API and dispatch
  try {
    const myResponse = await list(config);
    console.log("Current ITINERARY LIST: ", myResponse.data);
    dispatch({ type: FETCH_LIST, payload: myResponse.data });
  } catch (err) {
    console.log("Error getting current Itinerary list ", err);
  }
};

//action creator to show/hide add form when user clicks + button on search item
export const toggleAddForm = () => {
  console.log("I AM IN ACTIONS, ABOUT TO TOGGLE");
  return {
    type: TOGGLE_ADD_FORM,
  };
};

//action creator to add
// export const addListLocation = () => {
//   return {
//     type: TOGGLE_ADD_FORM,
//   };
// };
