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
  TOGGLE_MENU_CLICKED,
  REMOVE_LIST_LOCATION,
  UPDATE_LIST_LOCATION,
  TOGGLE_EDIT_FORM,
  TOGGLE_MAP,
  UPDATE_MAP_CENTER,
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
export const searchLocations =
  (searchInput, locationSearch) => async (dispatch) => {
    let finalSearchterm = searchInput + " in " + locationSearch;
    console.log("Final Search term: ", finalSearchterm);
    const dataObj = {
      searchTerm: finalSearchterm,
    };

    //console.log(dataObj);
    //console.log("ENV API KEY: ", process.env.REACT_APP_PLACES_API_KEY);

    const config = {
      method: "post",
      url: "/searchDestinations",
      data: dataObj,
    };

    try {
      //call API that calls Google places API
      const myResponse = await list(config);
      //console.log("Search Locations results: ", myResponse.data);

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
    // console.log("Current ITINERARY LIST: ", myResponse.data);
    await dispatch({ type: FETCH_LIST, payload: myResponse.data });
    await dispatch({ type: UPDATE_MAP_CENTER, payload: myResponse.data });
  } catch (err) {
    console.log("Error getting current Itinerary list ", err);
  }
};

//action creator for getting current list of destinations
export const deleteListItem = (location) => async (dispatch) => {
  const config = {
    method: "delete",
    url: `/destination/${location.destinationId}`,
  };

  //call API and dispatch
  try {
    const myResponse = await list(config);
    console.log("Delete Successful: ", myResponse.data);
    dispatch({ type: REMOVE_LIST_LOCATION });
  } catch (err) {
    console.log("Error while deleting list item", err);
  }
};

//action creator to show/hide add form when user clicks + button on search item
export const toggleAddForm = (location) => {
  //console.log("ToggleAddForm action creator: ", location.name);
  return {
    type: TOGGLE_ADD_FORM,
    payload: location,
  };
};

export const toggleMenu = (location) => {
  //console.log("TOGGLE_MENU: ", location);
  return {
    type: TOGGLE_MENU_CLICKED,
    payload: location,
  };
};

//show/hide Edit form menu on edit click in List item
export const toggleEditForm = () => {
  return {
    type: TOGGLE_EDIT_FORM,
  };
};

//toggle Map/Search results view
export const toggleMap = () => {
  return {
    type: TOGGLE_MAP,
  };
};

//action creator to add
export const addListLocation = (searchItem, formProps) => async (dispatch) => {
  //console.log("Chosen search item Action", searchItem);
  //console.log(" Form props Action", formProps);

  const curArrivalDateTime = formProps.date + " " + formProps.time + ":00";

  const dataObj = {
    name: searchItem.name,
    arrivalDateTime: curArrivalDateTime,
    address: searchItem.formatted_address,
    lat: searchItem.geometry.location.lat,
    lng: searchItem.geometry.location.lng,
    note: formProps.notes,
    rating: searchItem.rating,
    url: searchItem.picUrl,
  };

  const config = {
    method: "post",
    url: "/destination",
    data: dataObj,
  };

  try {
    const myResponse = await list(config);
    //console.log("SUCCESSFUL RESPONSE: ", myResponse);

    // const config2 = {
    //   method: "get",
    //   url: "/destinations",
    // };

    // const myResponse2 = await list(config2);

    // console.log("MYRESPONSE2: ", myResponse2);
    // dispatch({ type: FETCH_LIST, payload: myResponse2 });
    dispatch({ type: TOGGLE_ADD_FORM });
  } catch (err) {
    console.log("Error when API call to add location to List", err);
  }

  // return {
  //   type: ADD_LIST_LOCATION,
  // };
};

export const updateListItem = (listItem, formProps) => async (dispatch) => {
  const curArrivalDateTime = formProps.date + " " + formProps.time + ":00";

  const dataObj = {
    note: formProps.notes,
    arrivalDateTime: curArrivalDateTime,
  };

  var config = {
    method: "put",
    url: `/destination/${listItem.destinationId}`,
    data: dataObj,
  };

  try {
    const myResponse = await list(config);
    dispatch({ type: TOGGLE_EDIT_FORM });
  } catch (err) {
    console.log("Error when calling update list item API:", err);
  }
};
