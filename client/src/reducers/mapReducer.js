import { UPDATE_MAP_CENTER } from "../actions/types";

const INITIAL_STATE = {
  center: {
    lat: 37.7749,
    lng: -122.4194,
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MAP_CENTER:
      console.log("I AM UPDATING CENTER!!");
      let curCount = 0;
      let minCords = {};
      let maxCords = {};
      let centerCord = {};
      for (let cur of action.payload) {
        if (curCount === 0) {
          minCords.lat = cur.lat;
          minCords.lng = cur.lng;
          maxCords.lat = cur.lat;
          maxCords.lng = cur.lng;
          centerCord.lat = cur.lat;
          centerCord.lng = cur.lng;
          curCount++;
        } else {
          if (cur.lat < minCords.lat) {
            minCords.lat = cur.lat;
          }
          if (cur.lng < minCords.lng) {
            minCords.lng = cur.lng;
          }
          if (cur.lat > maxCords.lat) {
            maxCords.lat = cur.lat;
          }
          if (cur.lng > maxCords.lng) {
            maxCords.lng = cur.lng;
          }
        }
      }

      centerCord.lat = minCords.lat + (maxCords.lat - minCords.lat) * 0.5;
      centerCord.lng = minCords.lng + (maxCords.lng - minCords.lng) * 0.5;
      return { ...state, center: centerCord };
    default:
      return state;
  }
};
