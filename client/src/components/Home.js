import React from "react";
import { connect } from "react-redux";
import SearchResultList from "./search/SearchResultList";
import MyList from "./list/MyList";
import MyAppBar from "./search/MyAppBar";
// import Map from "./map/Map";
import MapOrSearch from "./MapOrSearch";
import Map from "./map/Map";
import Loading from "./Loading";
import { Grid, Paper, CircularProgress, Box } from "@mui/material";

class Home extends React.Component {
  render() {
    const myStyle = {
      root: {
        flexGrow: 1,
        paddingTop: "50px",
      },
      paper: {
        height: 140,
        width: 100,
      },
      control: {
        // padding: theme.spacing(2),
      },
      page: {
        background: "#ffffff",
      },
    };
    //const showMap = false;
    return (
      <div style={myStyle.page}>
        <MyAppBar />
        <Grid container style={myStyle.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item style={{ paddingLeft: "20px" }}>
                <Paper>
                  <MyList />
                </Paper>
              </Grid>
              <Grid item>
                <Paper>
                  {this.props.showMap === true && <Map />}
                  {this.props.showLoading === true && <Loading />}
                  <SearchResultList />
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showMap: state.pageControls.showMap,
    showLoading: state.pageControls.showLoading,
  };
};
export default connect(mapStateToProps, {})(Home);
