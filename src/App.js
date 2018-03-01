import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coursesales from './Coursesales';

class App extends Component {
  render() {
    var courses = [
      { name: 'complete iOS10 dev course' , price: 199 },
      { name: 'complete pentesting course' , price: 299 },
      { name: 'complete front end dev course' , price: 180 },
      { name: 'Bug Bounty and web app pentesting course' , price: 190 }
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to course purchase page</h1>
        </header>

        <Coursesales items = {courses}/>
      </div>
    );
  }
}

export default App;
