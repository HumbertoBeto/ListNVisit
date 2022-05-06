import React from "react";
import { Badge, Tooltip } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import RoomIcon from "@mui/icons-material/Room";
import GoogleMapReact from "google-map-react";
import { pink } from "@mui/material/colors";

const AnyReactComponent = ({ text }) => (
  <Tooltip title="Chic Fil A" placement="top" arrow>
    <Badge badgeContent={text} color="primary">
      <RoomIcon sx={{ fontSize: 40, color: pink[500] }} />
    </Badge>
  </Tooltip>
);
class Map extends React.Component {
  componentDidMount() {
    const locations = [
      {
        lat: 33.8823476,
        lng: -117.8851033,
      },
      {
        lat: 33.698107,
        lng: -117.827973,
      },
      {
        lat: 33.9908824,
        lng: -118.4771953,
      },
      {
        lat: 33.8597769,
        lng: -117.9574735,
      },
      {
        lat: 33.8592274,
        lng: -117.9239891,
      },
    ];

    //find mins and max's
    let minCords = {
      lat: 33.8823476,
      lng: -117.8851033,
    };
    let maxCords = {
      lat: 33.8823476,
      lng: -117.8851033,
    };
    let centerCord = {
      lat: 33.8823476,
      lng: -117.8851033,
    };

    //loop through locations
    for (let cur of locations) {
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

    centerCord.lat = minCords.lat + (maxCords.lat - minCords.lat) * 0.5;
    centerCord.lng = minCords.lng + (maxCords.lng - minCords.lng) * 0.5;
    console.log("FINAL CENTER: ", centerCord);
  }

  static defaultProps = {
    center: {
      lat: 33.8444947,
      lng: -118.15258415,
    },
    zoom: 11,
  };

  calcMiddle = () => {};

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "94vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_PLACES_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={33.8823476} lng={-117.8851033} text="1" />
          <AnyReactComponent lat={33.698107} lng={-117.827973} text="2" />
          <AnyReactComponent lat={33.9908824} lng={-118.4771953} text="3" />
          <AnyReactComponent lat={33.8597769} lng={-117.9574735} text="4" />
          <AnyReactComponent lat={33.8592274} lng={-117.9239891} text="5" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
