import React from 'react';
import './App.css';
import { Introduction, Sidebar } from './components';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Introduction />
        {/* <p className="App-logo">Hi</p> */}
      </div>
    </div>
  );
}

export default App;
