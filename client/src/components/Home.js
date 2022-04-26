import Search from "@mui/icons-material/Search";
import React from "react";
import SearchResultList from "./search/SearchResultList";
import MyList from "./list/MyList";
import MyAppBar from "./search/MyAppBar";

class Home extends React.Component {
  render() {
    return (
      <div>
        <MyAppBar />
        <br></br>
        <SearchResultList />
        <br></br>
        <MyList />
      </div>
    );
  }
}

export default Home;
