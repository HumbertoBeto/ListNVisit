import React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

class MyList extends React.Component {
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
    return (
      <div>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Pizza" src="" />
          </ListItemAvatar>
          <ListItemText
            primary="Dominos Pizza"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  style={myStyle.inline}
                  color="textPrimary"
                >
                  May 22
                </Typography>
                {" — Dinner with the Family"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
        <ListItem alignItems="flex-start">
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
        </ListItem>
      </div>
    );
  }

  render() {
    const myStyle = {
      root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: "#FFF89A",
      },
      inline: {
        display: "inline",
      },
    };

    return <List style={myStyle.root}>{this.renderList()}</List>;
  }
}

export default MyList;
