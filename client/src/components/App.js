import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import SearchResultAdd from "./search/SearchResultAdd";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/add" exact component={SearchResultAdd} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
