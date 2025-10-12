// import react and the employeeform css that was copied from JohnRussell GitHub
import React from 'react';
import '../EmployeeForm.css';

//creates the EmployeeForm class extended from react component
//super enables this.props inside constructor
class EmployeeForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', title: '', department: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    // whenever the value changes, so when a user enters text into an input, the state changes
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    //when submit is clicked the values inputed by the user are logged in the console and then wiped
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.setState({name: '', email: '', title: '', department: ''});
    }

    // renders/outputs whats going to appear on screen

    render() {
        return (
            // start of the html employee form with h2 header
            // above each input is a label with styling from css
            // each input has an input type (all text type except email) and calls the handleChange method created above
            // the form calls the onsubmit method created above when a user clicks submit

            <form className="employee-form" onSubmit={this.handleSubmit}>
                <h2>New Employee</h2>
                
                
                <label>Name:</label>
                <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />

                <label>Email:</label>
                <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />

                <label>Job Title:</label>
                <input type="text" name="title" onChange={this.handleChange} value={this.state.title} />

                <label>Department:</label>
                <input type="text" name="department" onChange={this.handleChange} value={this.state.department} />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

// export this component so it can be used in other files (app.js)
export default EmployeeForm;
