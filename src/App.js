import React, { useState } from 'react';
import './App.css';
import MemberForm from "./Components/Form";
import Members from "./Components/Members";
import styled from "styled-components";

const MembersDiv = styled.div`
  background-color: #3d80c2;
  margin: 25px;
  padding: 25px;
`;

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name:"Tauan", 
      email:"tauanlongaretti@gmail.com",
      role:"Full Stack Web Dev"
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
      <MembersDiv className="members">
        <Members teamMembers={teamMembers} />
      </MembersDiv>
    </div>
  );
}

export default App;
