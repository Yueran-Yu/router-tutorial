import React from 'react';
import {Link} from "react-router-dom";

import {getAllEmployees} from "./EmloyeeAPI";

const Directory = () => {

  const employeeList = getAllEmployees()
  return (
    <div>
      <h3>DIRECTORY!</h3>
      <div>
        {employeeList.map(employee => {
          return (
            <div key={employee.id}>
              <Link to={`/directory/${employee.id}`}>{employee.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Directory;
