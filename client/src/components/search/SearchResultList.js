import React from "react";
import { connect } from "react-redux";
import { fetchSearchLocations, toggleAddForm } from "../../actions";
import {
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  ImageList,
  ImageListItemBar,
  ListSubheader,
  IconButton,
  ImageListItem,
} from "@mui/material";

import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SearchResultAdd from "./SearchResultAdd";
// import Map from "../map/Map";
//import { InfoIcon } from "@mui/icons-material";

class SearchResultList extends React.Component {
  componentDidCMount() {
    this.props.fetchSearchLocations();
  }

  onAddClicked = (location) => {
    console.log("ON ADD CLICKED: ", location.name);
    this.props.toggleAddForm(location);
  };

  //loops through search results array and creates list items
  renderList() {
    const myStyle = {
      icon: {
        color: "#ffffff",
      },
    };
    return this.props.searchResults.map((location) => {
      return (
        <ImageListItem key={location.place_id}>
          <img
            src={location.picUrl}
            alt={location.name}
            style={{ height: "180px", width: "350px" }}
          />
          <ImageListItemBar
            title={location.name}
            subtitle={<span>rating: {location.rating}</span>}
            actionIcon={
              <IconButton
                aria-label={`add ${location.name}`}
                style={myStyle.icon}
                onClick={() => this.onAddClicked(location)}
              >
                <AddCircleOutlineRoundedIcon />
              </IconButton>
            }
          />
          <img primary={location.name} secondary={location.rating} />
        </ImageListItem>
      );
    });
  }

  render() {
    const myStyle = {
      root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: "white",
      },
      imageList: {
        width: 1400,
        height: 930,
      },
    };

    console.log(this.props.searchResults);
    return (
      <div style={myStyle.root}>
        <SearchResultAdd />
        <div>
          <ImageList rowHeight={180} style={myStyle.imageList}>
            <ImageListItem
              key="Subheader"
              cols={4}
              gap={8}
              style={{ height: "auto" }}
            >
              {/* <ListSubheader component="div">Search Results:</ListSubheader> */}
            </ImageListItem>
            {this.renderList()}
          </ImageList>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return { searchResults: Object.values(state.searchResults) };
};

export default connect(mapStateToProps, {
  fetchSearchLocations,
  toggleAddForm,
})(SearchResultList);
