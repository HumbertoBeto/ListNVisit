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
  const apiQuery = `/textsearch/json?query=${searchInput}&key=AIzaSyBsA3aUKWt3O9gMIBTM-eyMH6Zkn6vtnfg`;
  google.get(apiQuery);
};
