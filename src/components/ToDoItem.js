import React, { Component } from "react";
import './ToDoItem.css';
// import "./ParkList.css";
// import listOfParks from "./data/parks.json";

class ToDoItem extends Component {

    constructor(props) {
        super(props);

        this.state = { 
            title: this.props.thisItem.title,
            complete: this.props.thisItem.complete,
        } 
    }

    changeMark = () => {
        this.setState({
            complete: (this.state.complete ? false : true)
        });
    }

    render() {
            return (<div className="todoItem">
                <div className={this.state.complete ? "done" : "notDone"} >{this.state.title}</div>
                <div className="Square" onClick={this.changeMark}>
                        {this.state.complete ? "Mark as Incomplete" : "Mark as Complete"}
                </div>
            </div>);
        }
    }
    
export default ToDoItem;