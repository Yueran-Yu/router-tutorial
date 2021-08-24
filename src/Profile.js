import React from "react";
import {withRouter, useParams} from 'react-router-dom';
import {getEmployeeById} from "./EmloyeeAPI";

const Profile = () => {
  const {id} = useParams()
  console.log(id)
  console.log(getEmployeeById(id)[0].name)
  return (
    <div>
      <h3>Profile</h3>
      <h3>Name: {getEmployeeById(id)[0].name}</h3>
      <h3>role: {getEmployeeById(id)[0].role}</h3>
      <h3>id: {getEmployeeById(id)[0].id}</h3>
    </div>
  )
}

export default withRouter(Profile);