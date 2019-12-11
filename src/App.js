import React, { useState } from 'react';
import './App.css';
import MemberForm from "./Components/Form";
import Members from "./Components/Members";
import { notEqual } from 'assert';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name:"", 
      email:"",
      role:""
    }
]);

  const addNewMember = teamMember => {
    const newMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role
    };
    
    const newMemberCollection = [...teamMembers, newMember];
    setTeamMembers(newMemberCollection);

  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header">Team Builder</h1>
      </header>
      <div className="form-component">
        <MemberForm addNewMember={addNewMember} />
      </div>
      <div className="members">
        <Members teamMembers={teamMembers} />
      </div>
    </div>
  );
}

export default App;
