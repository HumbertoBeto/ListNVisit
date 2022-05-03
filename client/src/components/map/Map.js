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
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_PLACES_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="1" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
