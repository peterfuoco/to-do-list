import React, { Component } from "react";
import './App.css';
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

class App extends Component {

  constructor() {
    super();
    this.state = {
      toDoList: [
        {
          title: "Wash the dishes",
          complete: false
        },
        {
          title: "Walk the dog",
          complete: false
        },
        {
          title: "Make the bed",
          complete: true
        },
      ]
    }
  }

  addNewToDo = ( toDoActivity ) => {
      const myArray = this.state.toDoList;
      if ( toDoActivity ) {
        const myAct = { title: toDoActivity,
                    complete: false};
        myArray.push(myAct);
    
        this.setState({
          toDoList: myArray
        });
      }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <ToDoForm addNewToDo={this.addNewToDo}/>
        </header>
            <ToDoList toDoList={this.state.toDoList}/>
      </div>
    );
  }
}

export default App;
