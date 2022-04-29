import { TOGGLE_ADD_FORM } from "../actions/types";

const INITIAL_STATE = {
  addFormShow: false,
  chosenSearchLocation: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_ADD_FORM:
      //change toggle status based on current bool
      if (state.addFormShow === false) {
        return {
          ...state,
          addFormShow: true,
          chosenSearchLocation: action.payload,
        };
      } else {
        return { ...state, addFormShow: false };
      }
    default:
      return state;
  }
};
