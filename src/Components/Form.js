import React, { useState } from 'react';

const MemberForm = ({addNewMember}) => {
    const [teamMember, setTeamMember] = useState({
        name:"",
        email:"",
        role:""
    });
}
const addMember = event => {
    event.preventDefault();
    addNewMember(teamMember);
    setTeamMember({name:"", email:"", role:""});
};
return (
    <form onSubmit={submitForm}>
        
    </form>
)