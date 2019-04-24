import React from 'react';
import logo from './logo.svg';
import './App.css';

import Output from './Output';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <input 
          onChange={ (e) => {
            console.log("You typed something");
            console.log(e.target.value);
          } }
        />

        <Output 
        text="does it work?"
        />
        
      </header>
    </div>
  );
}

export default App;
