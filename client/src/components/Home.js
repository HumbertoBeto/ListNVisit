import Search from "@mui/icons-material/Search";
import React from "react";
import SearchBarInput from "./search/SearchBarInput";
import GoogleAuth from "./GoogleAuth";
import SearchResultList from "./search/SearchResultList";

class Home extends React.Component {
  render() {
    return (
      <div>
        <GoogleAuth />
        <br></br>
        <SearchBarInput />
        <br></br>
        <SearchResultList />
      </div>
    );
  }
}

export default Home;
