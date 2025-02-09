import React from "react";

import { useState } from "react"

let counter = 4; //3 items already predefied, so starting from 4

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Task1",
      description: "Description for Task1"
    },
    {
      id: 2,
      title: "Task2",
      description: "Description for Task2"
    },
    {
      id: 3,
      title: "Task3",
      description: "Description for Task3"
    }
  ]);

  function updateTos(){
    let counterLocal = counter++;
    //using spread operator(...) to spread existing todos and appending the next one
    setTodos([...todos,
      {
        id: counterLocal,
        title: "Task : " + counterLocal,
        description: "Description for Task : " + counterLocal
      }
    ])
  }

  return (
    <div> 
      <button onClick={updateTos}> Add ToDo button</button>
      {/* iterating over the todos list */}
      {todos.map((todo) => 
        <ToDo key={todo.id} title={todo.title} description={todo.description}></ToDo> 
      )}
    </div>
  )
}

function ToDo({title, description}){
  return(
    <div>
      <h1>{title}</h1>
      <h6>{description}</h6>
    </div>
  )
}

export default App
