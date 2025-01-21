import React from "react";
import Router from "./shared/Router";
import './assets/scss/index.scss';
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      <Header />
      <main className="content">
        <Router />
      </main>
    </div>
  );
};

export default App;