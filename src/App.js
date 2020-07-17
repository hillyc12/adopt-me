import React from "react";
import { render } from "react-dom";

//import Pet from "./Pet";
import SearchParam from "./SearchParam";
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      {/*  {<Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> }  */}
      <SearchParam />
    </div>
  );
};
render(<App />, document.getElementById("root"));
