import React from "react";
import SearchResultList from "./search/SearchResultList";
import MyList from "./list/MyList";
import MyAppBar from "./search/MyAppBar";
import { Grid, Paper } from "@mui/material";

class Home extends React.Component {
  render() {
    const myStyle = {
      root: {
        flexGrow: 1,
        paddingTop: "5px",
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        // padding: theme.spacing(2),
      },
      page: {
        background: "#9ADCFF",
      },
    };
    return (
      <div style={myStyle.page}>
        <MyAppBar />
        <Grid container style={myStyle.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item>
                <Paper>
                  <MyList />
                </Paper>
              </Grid>
              <Grid item>
                <SearchResultList />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;
