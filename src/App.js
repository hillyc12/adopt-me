import React, { useState } from "react";
import ReactDom, { render } from "react-dom";
import Pet from "./Pet";
import SearchParam from "./SearchParam";
import { Router, Link } from "@reach/router";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt Me!</Link>
      </header>
      <Router>
        <SearchParam path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(<App />, document.getElementById("root"));
