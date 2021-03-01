import React, { Component } from "react";
import ToDoItem from "./ToDoItem";
import "./ToDoList.css";
// import listOfParks from "./data/parks.json";

class ToDoList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const myList = this.props.toDoList.map((todo, index) => {
            return (<ToDoItem key={index} thisItem={todo}/>);
        });
        return (<div className="List">{myList}</div>);
    }
}
    
export default ToDoList;


