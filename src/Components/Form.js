import React, { useState } from 'react';

const MemberForm = ({addNewMember}) => {
    const [teamMember, setTeamMember] = useState({
        name:"",
        email:"",
        role:""
    });

const handleChanges = event => {
    setTeamMember({ ...teamMember, [event.target.name]: event.target.value });
}

const addMember = event => {
    event.preventDefault();
    addNewMember(teamMember);
    setTeamMember({name:"", email:"", role:""});
};
return (
    <form onSubmit={addMember}>
      <label htmlFor="name" >Name</label>
        <input 
          id="name"
          type="text"
          name="name"
          onChange={handleChanges}
          value={teamMember.name}
        />
      <label htmlFor="email" >Email</label>
        <input
          id="email"
          type="text"
          name="email"
          onChange={handleChanges}
          value={teamMember.email}
        />  
      <label htmlFor="role" >Role</label>
        <input
          id="role"
          type="text"
          name="role"
          onChange={handleChanges}
          value={teamMember.role}
        />
        <button type="submit">Add Member</button>    
    </form>
    );
}

export default MemberForm;