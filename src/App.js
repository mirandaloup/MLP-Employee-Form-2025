import React, { useState, useEffect } from 'react';
import EmployeeForm from './Components/EmployeeForm';
import EmployeeList from './Components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState([]);

useEffect(function() {
  const savedEmployeesString = localStorage.getItem('employees');
  let savedEmployees;

  if (savedEmployeesString !== null) {
    savedEmployees = JSON.parse(savedEmployeesString);
  } else {
    savedEmployees = [];
  }

  setEmployees(savedEmployees);
}, []);



  function addEmployee(emp) {
    setEmployees(function(prev) {
      return prev.concat(emp);
    });
  }

  function saveData() {
    localStorage.setItem('employees', JSON.stringify(employees));
    alert('Saved to Local Storage');
  }

  return (
    <div className="App">
      <EmployeeForm onAdd={addEmployee} />
      <button type="button" className="employee-form-save" onClick={saveData}>Save</button>
      <h2 style={{ textAlign: 'center' }}>Current Employee Records</h2>
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;
