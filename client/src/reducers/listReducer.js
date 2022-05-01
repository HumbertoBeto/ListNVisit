import { FETCH_LIST } from "../actions/types";

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_LIST:
      //console.log("I AM IN SEARCH ");
      //console.log(action.payload[0].place_id);
      //const newState = action.payload;
      return action.payload;
    //..newState, ..._.mapKeys(action.payload, "place_id") };
    default:
      return state;
  }
};
