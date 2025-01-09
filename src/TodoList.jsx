import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [Todo, setTodo]= useState([{task:"Sample", id: uuidv4()}]);
    let [newTodo, setNewTodo]= useState("");
    let newUdate=()=>{
        setTodo((prevTodo)=>{
            return [...prevTodo, {task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    };

    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value);
    };

    let DeleteTodo= ()=>{
        console.log("Delete");
        
    }

    
    return(
        <div>
            <h1>Todo List</h1>
            <br />
            <input type="text" placeholder="Add Task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={newUdate}>Task Add</button>
            <hr />
            <h3>Task List</h3>
            <ul>
                {
                    Todo.map((Todos)=>{
                      return  <li key={Todo.id}>
                        <span>{Todos.task}</span>
                        <button onClick={DeleteTodo}>Delete</button>
                      </li>
                    })
                }
            </ul>
        </div>
    )
}