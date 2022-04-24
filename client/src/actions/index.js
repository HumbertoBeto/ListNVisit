import list from "../apis/list";
import google from "../apis/google";

import {
  SIGN_IN,
  SIGN_OUT,
  UPDATE_SEARCH_LOCATIONS,
  FETCH_SEARCH_LOCATIONS,
  FETCH_LIST,
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
  //const apiQuery = `/textsearch/json?query=${searchInput}&key=AIzaSyBsA3aUKWt3O9gMIBTM-eyMH6Zkn6vtnfg`;

  const dataObj = {
    searchTerm: searchInput,
  };

  console.log(dataObj);

  const config = {
    method: "post",
    url: "/searchDestinations",
    data: dataObj,
  };

  //call API & dispatch
  try {
    const myResponse = await list(config);
    console.log("Search Locations results: ", myResponse.data);
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
