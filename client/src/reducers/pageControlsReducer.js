import {
  TOGGLE_ADD_FORM,
  ADD_LIST_LOCATION,
  TOGGLE_MENU_CLICKED,
  TOGGLE_EDIT_FORM,
} from "../actions/types";

const INITIAL_STATE = {
  addFormShow: false,
  menuShow: false,
  editFormShow: false,
  chosenSearchLocation: {},
  listItemChosen: {},
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
    case TOGGLE_MENU_CLICKED:
      // when user clicks three dots icon on a list item
      if (state.menuShow === false) {
        return {
          ...state,
          menuShow: true,
          listItemChosen: action.payload,
        };
      } else {
        return { ...state, menuShow: false };
      }
    case TOGGLE_EDIT_FORM:
      if (state.editFormShow === false) {
        return {
          ...state,
          editFormShow: true,
        };
      } else {
        return { ...state, editFormShow: false };
      }
    default:
      return state;
  }
};
