import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import pageControlsReducer from "./pageControlsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  searchResults: searchReducer,
  pageControls: pageControlsReducer,
});
