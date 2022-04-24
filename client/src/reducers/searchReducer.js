import {
  FETCH_SEARCH_LOCATIONS,
  UPDATE_SEARCH_LOCATIONS,
} from "../actions/types";
import _ from "lodash";

//const INITIAL_STATE = {};

export default (state = {}, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_LOCATIONS:
      console.log("I AM IN SEARCH ");
      console.log(action.payload[0].place_id);
      //const newState = action.payload;
      return action.payload;
    //..newState, ..._.mapKeys(action.payload, "place_id") };
    case FETCH_SEARCH_LOCATIONS:
      console.log("I AM FETCHING SEARCH LOCATIONS");
      return { ...state };
    default:
      return state;
  }
};
