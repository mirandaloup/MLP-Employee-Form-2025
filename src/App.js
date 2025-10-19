import React, { useState } from 'react';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

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
    </div>
  );
}

export default App;
