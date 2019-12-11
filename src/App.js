import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name:"", 
      email:"",
      role:""
    }
]);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Team Builder</h1>
      </header>
    </div>
  );
}

export default App;
