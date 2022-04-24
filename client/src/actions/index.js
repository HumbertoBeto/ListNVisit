import list from "../apis/list";
import google from "../apis/google";

import { SIGN_IN, SIGN_OUT } from "./types";

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

export const searchLocations = (searchInput) => async (dispatch) => {
  //const apiQuery = `/textsearch/json?query=${searchInput}&key=AIzaSyBsA3aUKWt3O9gMIBTM-eyMH6Zkn6vtnfg`;

  const data = {
    searchTerm: searchInput,
  };

  console.log(data);

  const config = {
    method: "post",
    url: "/searchDestinations",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    data: searchInput,
  };

  try {
    const myResponse = await list(config);
    console.log("Search Locations results: ", myResponse.data);
  } catch (err) {
    console.log("Error while calling Google API: ", err);
  }
};
