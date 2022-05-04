import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SearchResultAdd from "./search/SearchResultAdd";
import SearchBarInput from "./search/SearchBarInput";
import SearchResultList from "./search/SearchResultList";
import Map from "./map/Map";
import ListEdit from "./list/ListEdit";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={SearchResultAdd} />
          <Route path="/search" exact component={SearchBarInput} />
          <Route path="/results" exact component={SearchResultList} />
          <Route path="/map" exact component={Map} />
          <Route path="/edit" exact component={ListEdit} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
