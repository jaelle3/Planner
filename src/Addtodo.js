import React, { Component } from 'react';

class Addtodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: " "
          }
    }

handleChange = (event) => {
    this.setState({
        content : event.target.value
    })

}
handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state);
}




    render() { 
        return ( 
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label>Add New Todo</label>
                    <input type = "text" onChange = {this.handleChange}></input>
                </form>
            </div>
         );
    }
}
 
export default Addtodo;