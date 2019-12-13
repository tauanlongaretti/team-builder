import React, { useState } from 'react';
import styled from "styled-components";

const FormElement = styled.form`
  margin: 25px;
  padding: 25px;
  text-align: left;
  background-color: #1e4162;
  width: 10% auto;
  color: white;
`;

const Label = styled.label`
  margin-left: 50px;
  font-size: 20px;
`;

const Input = styled.input`
  margin: 10px 10px 10px 25px;
  width: 250px;
  line-height: 2;
`;

const Button = styled.button`
  margin: 15px 50px 0px 0px;
  width: 150px;
  line-height: 1.7;
  font-size: 20px;
  background-color: #0099e6;
  color: white;
  position: absolute;
  right: 35px;
  top: 180px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 20px;
`;

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
    
        <FormElement onSubmit={addMember}>
            <Label htmlFor="name" >Name</Label>
            <Input 
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={teamMember.name}
            />  
            <Label htmlFor="email" >Email</Label>
            <Input
            id="email"
            type="text"
            name="email"
            onChange={handleChanges}
            value={teamMember.email}
            />
            <Label htmlFor="role" >Role</Label>
            <Input
            id="role"
            type="text"
            name="role"
            onChange={handleChanges}
            value={teamMember.role}
            />
            <Button type="submit">Add Member</Button> 
        </FormElement>    
    );
}

export default MemberForm;