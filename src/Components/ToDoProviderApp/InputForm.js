import React, { useContext, useState } from "react";
import "./InputForm.css";
import { ToDoContext } from "./ToDoProvider";



function InputForm() {
    const [toDoInputValue, setToDoInputValue] = useState("")
     const { toDos, setToDos } = useContext(ToDoContext); 
  
    function HandleToDoInputChange(event) {
        setToDoInputValue(event.target.value)
    }

    function HandleAddInputValue() {
        setToDos((prev) => [...prev, {toDo: toDoInputValue, id: prev.length ? prev[prev.length - 1].id + 1 : 1 }]) 
    }

    return(<div className="input-button">
         <input id = "add-text" type="text" onChange={HandleToDoInputChange}></input>
         <button id = "add-button" onClick={HandleAddInputValue}>Add</button>
    </div>
    )
}


export default InputForm;






