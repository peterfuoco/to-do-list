import React, { Component } from "react";
import "./ToDoForm.css";
// import listOfParks from "./data/parks.json";

class ToDoForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
            return (<div className="myForm">
                <form id="todoForm" name="todoForm" onSubmit={ (event) => {
                            event.preventDefault();
                            this.props.addNewToDo(event.target.newTodo.value);
                            event.target.newTodo.value = ""; 
                        } } >
                    <label className="letters" htmlFor="newTodo">To Do: </label> 
                    <input className="myTextItem" placeholder="New To Do Activity" type="text" id="newTodo" name="newTodo"></input>
                </form>
                <button className="myButton" type="submit" form="todoForm" value="Save">Save</button>
            </div>);
      }
    }
    
export default ToDoForm;
