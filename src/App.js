import React from "react";
import Router from "./shared/Router";
import './assets/scss/index.scss';
import Header from "./components/Header";
import Nav from "./components/Nav";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      <main className="content">
        <Router />
        {/* <FontAwesomeIcon icon={faSearch} /> */}
      </main>
    </div>
  );
};

export default App;