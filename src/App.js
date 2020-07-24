import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

let numbers = [1, 2, 3, 4];

class App extends Component {
  constructor() {
    super();
    this.state = {
      numberSelected: 1,
    };
  }

  handleButtonClick = (number) => {
    this.setState({ numberSelected: number });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            numberSelected={this.state.numberSelected}
            numbers={numbers}
            handleButtonClick={this.handleButtonClick}
          />
          <Circles
            numbers={numbers}
            numberSelected={this.state.numberSelected}
          />
        </main>
      </div>
    );
  }
}

export default App;
