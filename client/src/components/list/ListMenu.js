import React from "react";
import { connect } from "react-redux";
import { toggleMenu } from "../../actions";
import { MenuItem, Menu } from "@mui/material";

class ListMenu extends React.Component {
  deleteClicked = () => {
    console.log("DELETE CLICKED!!!");
    this.props.toggleMenu();
  };

  editClicked = () => {
    console.log("EDIT CLICKED!!!");
    this.props.toggleMenu();
  };

  render() {
    return (
      <Menu
        id="simple-menu"
        anchorEl={null}
        keepMounted
        open={this.props.menuShow}
        onClose={() => {
          this.toggleMenu();
        }}
      >
        <MenuItem onClick={this.editClicked}>Edit</MenuItem>
        <MenuItem onClick={this.deleteClicked}>Delete</MenuItem>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return { menuShow: state.pageControls.menuShow };
};

export default connect(mapStateToProps, { toggleMenu })(ListMenu);
