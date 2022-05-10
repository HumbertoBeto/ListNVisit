import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import pageControlsReducer from "./pageControlsReducer";
import listReducer from "./listReducer";
import mapReducer from "./mapReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  searchResults: searchReducer,
  pageControls: pageControlsReducer,
  list: listReducer,
  map: mapReducer,
});
