import React from 'react';

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee, index) => (
          <li key={index}>
            {employee.name} — {employee.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmployeeList;
