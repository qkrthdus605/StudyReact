import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Comment from './Comment';

function App(){
  return(
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel ="noopener noreferrer">
          Learn React
        </a>
      </header>
      <div>
        <Comment/>
      </div>
    </div>
  );
}

export default App;
