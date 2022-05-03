import React from "react";
import { connect } from "react-redux";
import { toggleMenu, getList, deleteListItem } from "../../actions";
import { MenuItem, Menu } from "@mui/material";

class ListMenu extends React.Component {
  deleteClicked = async () => {
    console.log("DELETE CLICKED!!!");
    await this.props.deleteListItem(this.props.listItemChosen);
    await this.props.getList();
  };

  editClicked = async () => {
    console.log("EDIT CLICKED!!!");
    await this.props.toggleMenu();
    // await this.props.getList();
  };

  render() {
    return (
      <Menu
        id="simple-menu"
        anchorEl={null}
        keepMounted
        open={this.props.menuShow}
        onClose={() => {
          //this.toggleMenu();
        }}
      >
        <MenuItem onClick={this.editClicked}>Edit</MenuItem>
        <MenuItem onClick={this.deleteClicked}>Delete</MenuItem>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    menuShow: state.pageControls.menuShow,
    listItemChosen: state.pageControls.listItemChosen,
  };
};

export default connect(mapStateToProps, {
  toggleMenu,
  getList,
  deleteListItem,
})(ListMenu);
