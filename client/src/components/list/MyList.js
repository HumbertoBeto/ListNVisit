import React, { useRef } from "react";
import { connect } from "react-redux";
//import { DeleteIcon } from "@mui/icons-materi/";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ListMenu from "./ListMenu";
import ListEdit from "./ListEdit";
import { getList, toggleMenu, setAnchor } from "../../actions";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

class MyList extends React.Component {
  componentDidMount() {
    this.props.getList();
  }

  // menuButtonClicked = (location, event) => {
  //   console.log(event.currentTarget);
  //   this.props.toggleMenu(location);
  // };

  renderList() {
    const myStyle = {
      root: {
        width: "100%",
        maxWidth: "36ch",
        // backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: "inline",
      },
    };

    //sort list by date
    let sortedList = this.props.curList.sort(
      (a, b) => new Date(a.arrivalDateTime) - new Date(b.arrivalDateTime)
    );

    //console.log("SORTED LIST", sortedList);

    //create reft
    let curCount = 0;
    return sortedList.map((location) => {
      const newDate = new Date(location.arrivalDateTime);
      const curDate = newDate.toString();
      const finalDate = curDate.substring(0, curDate.indexOf("GMT"));
      //const finalDate = newDate.split("GMT")[0];
      //console.log(finalDate);
      //const divRef = React.useRef();
      this.myRef = React.createRef();
      curCount++;
      return (
        <div key={location.destinationId}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={location.name} src={location.url} />
            </ListItemAvatar>
            <ListItemText
              primary={`${curCount}. ${location.name}`}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    style={myStyle.inline}
                    color="textPrimary"
                  >
                    {` - ${finalDate}`}
                    {/* <Divider variant="middle" /> */}
                    <br></br>
                    {` - ${location.address}`}
                  </Typography>
                  <br></br>
                  {` - ${location.note}`}
                </React.Fragment>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                aria-controls="simple-menu"
                aria-haspopup="true"
                ref={this.myRef}
                onClick={(event) => {
                  console.log("Event:", event.currentTarget);
                  // const curLocation = location;
                  //location.anchorEl = event.currentTarget;
                  this.props.setAnchor(this.myRef.current);
                  this.props.toggleMenu(location);
                }}
              >
                <MoreHorizIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
          {/* <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Burgers" src="" />
          </ListItemAvatar>
          <ListItemText
            primary="CSU, Fullerton"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  style={myStyle.inline}
                  color="textPrimary"
                >
                  May 23 5pm
                </Typography>
                {" — Beto's Graduation"}
              </React.Fragment>
            }
          />
        </ListItem> */}
        </div>
      );
    });
  }

  render() {
    const myStyle = {
      root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: "#fafafa",
      },
      inline: {
        display: "inline",
      },
    };

    return (
      <div>
        <List style={myStyle.root}>{this.renderList()}</List>
        <ListMenu style={{ marginRight: "500px" }} />
        <ListEdit />
      </div>
    );
  }
}

//Object is necessary to make it an array of objects to then use Map to loop
const mapStateToProps = (state) => {
  return { curList: Object.values(state.list) };
};
export default connect(mapStateToProps, {
  getList,
  toggleMenu,
  setAnchor,
})(MyList);
