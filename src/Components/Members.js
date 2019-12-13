import React from "react";
import styled from "styled-components";

const MemberCard = styled.div`
    margin: 70px;
    border: 2px solid black;
    background-color: white;
    padding: 25px;
    font-size: 20px;
`;

const Members = props => {
  return (
    <div className="member-list">
      {props.teamMembers.map(teamMember => (
        <MemberCard className="teamMember" key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>  
        </MemberCard>    
      ))}  
    </div>
    )
}

export default Members;