import React, { Component } from "react";
// import Movies from "./components/movies";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

import "./App.css";

class App extends Component {
  render() {
    // function App()
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
