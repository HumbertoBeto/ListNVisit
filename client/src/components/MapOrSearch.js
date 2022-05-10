import React from "react";
import Map from "./map/Map";
import SearchResultList from "./search/SearchResultList";

class MapOrSearch extends React.Component {
  render() {
    const showMap = true;
    let mainComponent;
    if (showMap === true) {
      console.log("I AM IN HERE");
      mainComponent = <Map />;
    } else {
      console.log("I AM IN THE FALSE");
      mainComponent = <SearchResultList />;
    }
    return <div>{mainComponent}</div>;
  }
}

export default MapOrSearch;
