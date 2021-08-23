import React from "react";
import {withRouter} from 'react-router-dom';
import {getEmployeeById} from "./EmloyeeAPI";
import {useParams} from "react-router-dom";

const Profile = () => {
  const {id} = useParams()
  console.log(id)
  console.log(getEmployeeById(id)[0].name)

  return (
    <div>
      <h4>This is the profile</h4>
      <h5>Name: {getEmployeeById(id)[0].name}</h5>
      <h5>role: {getEmployeeById(id)[0].role}</h5>
      <h5>id: {getEmployeeById(id)[0].id}</h5>
    </div>
  )
}

export default withRouter(Profile);