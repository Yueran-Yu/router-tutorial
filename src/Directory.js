import React from 'react';
import {Link} from "react-router-dom";

import {getAllEmployees} from "./EmloyeeAPI";

const Directory = () => {

  const link ={
    fontSize: '40px',
    textDecoration: 'none',
    backgroundColor: '#54f1f1',
    margin: '20px 0',
    display:'block',
    padding:'20px'
  }
  const employeeList = getAllEmployees()
  return (
    <div>
      <h3>DIRECTORY!</h3>
      <div>
        {employeeList.map(employee => {
          return (
            <div key={employee.id}>
              <Link style={link} to={`/directory/${employee.id}`}>{employee.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Directory;
