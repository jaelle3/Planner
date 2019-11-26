import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Todos from "./Todos";
import Addtodo from "./Addtodo";

class App extends React.Component{
  state = {
    todos : [
      { id :1 , content : "Buy some milk"},
      {id :2 , content : "Stitch some clothes"},
      {id :3 , content : "Eat some froyo"},
      {id :4 , content : "Play with Cole"},
      {id : 5 , content : "Bake a fudge cake"}
    ]
  }

  deleteTodo = (id) => { //id as parametre so that we can look up and filter an item. Also we are going to pass tha function as a propn
  const todos = this.state.todos.filter( todo => 
    {
      return todo.id !== id 
    });
    this.setState ({
      todos
    }) //we are going to pass this function as a prop

  } //this function has to be in the app.js file so that it interacts with the state

  addTodo = (todo) => {
    todo.id = Math.random();   //random id or key for new todo
    let todos = [...this.state.todos,todo]//spread operator to add old todos to new todos
    this.setState = ({                          //updating the state
        todos
    })

}
 render (){
   return(
     <div className = "todo-app container">
        <h1 className = "centre blue-text">Todo's</h1>
        <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>  
        <Addtodo addTodo = {this.addTodo}/>
     </div>
   )
 }
}
export default App;
  