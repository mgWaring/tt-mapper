import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {


  findScales(){
    this.state.width = window.innerWidth;
    this.state.height = window.innerHeight;
  }

  render() {
    this.findScales();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>this window is {this.state.height} pixels high</p>
          <p>and {this.state.width} pixels wide</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
