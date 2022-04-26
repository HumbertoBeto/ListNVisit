import React from "react";
import { connect } from "react-redux";
import { fetchSearchLocations } from "../../actions";
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
//import { InfoIcon } from "@mui/icons-material";

class SearchResultList extends React.Component {
  componentDidCMount() {
    this.props.fetchSearchLocations();
  }

  //loops through search results array and creates list items
  renderList() {
    const myStyle = {
      icon: {
        color: "rgba(255, 255, 255, 0.54)",
      },
    };
    return this.props.searchResults.map((location) => {
      return (
        <ImageListItem key={location.place_id}>
          <img src={location.picUrl} alt={location.name} />
          <ImageListItemBar
            title={location.name}
            subtitle={<span>rating: {location.rating}</span>}
            actionIcon={
              <IconButton
                aria-label={`add ${location.name}`}
                style={myStyle.icon}
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
        width: 700,
        height: 600,
      },
    };

    console.log(this.props.searchResults);
    return (
      <div style={myStyle.root}>
        <ImageList rowHeight={180} style={myStyle.imageList}>
          <ImageListItem key="Subheader" cols={2} style={{ height: "auto" }}>
            <ListSubheader component="div">Search Results:</ListSubheader>
          </ImageListItem>
          {this.renderList()}
        </ImageList>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("STATE: ", state);
  return { searchResults: Object.values(state.searchResults) };
};

export default connect(mapStateToProps, { fetchSearchLocations })(
  SearchResultList
);
