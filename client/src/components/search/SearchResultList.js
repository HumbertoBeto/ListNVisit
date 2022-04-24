import React from "react";
import { connect } from "react-redux";
import { fetchSearchLocations } from "../../actions";
import { List, ListItem, ListItemText, Divider } from "@mui/material";

class SearchResultList extends React.Component {
  componentDidCMount() {
    this.props.fetchSearchLocations();
  }

  //loops through search results array and creates list items
  renderList() {
    return this.props.searchResults.map((location) => {
      return (
        <div key={location.place_id}>
          <ListItem alignItems="flex-start">
            <ListItemText primary={location.name} secondary={location.rating} />
          </ListItem>
          <Divider />
        </div>
      );
    });
  }

  render() {
    console.log(this.props.searchResults);
    return (
      <div>
        <h2>Results</h2>
        <List>{this.renderList()}</List>
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
