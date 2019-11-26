import React, { Component } from 'react';



const Todos = ({todos, deleteTodo}) => {
     const todoList = todos.length ? ( //checking to see if  the todos have a length thus meaning its either true or flase ie 0 or above 1   
         todos.map(todo => {           //execute array if length greater than 1
             return(
                 <div className="collection-item" key = {todo.id}>
         <span onClick ={() => {deleteTodo(todo.id)}}>{todo.content}</span>  
                 </div>
             )
         })
     ) : 
     (


     <p className = "center">You have no Todo's left,wow</p>  //execute if todos.length is 0
     )

        return (
            <div className = "todoscollection">
                {todoList}
            </div>
        )

}

export default Todos;