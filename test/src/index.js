import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "./components/Header";
import DisplayList from "./components/DisplayList";

const App = () => {
  return (
    <div>
      <Header />
      <DisplayList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
