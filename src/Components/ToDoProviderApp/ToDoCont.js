import React, { useContext } from "react";
import "./ToDoCont.css"
import ToDoProvider from "./ToDoProvider";
import { ToDoContext } from "./ToDoProvider";
import  { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function ToDoCont() {
  const { toDos, setToDos } = useContext(ToDoContext); 

  function EditToDoValue(item) {
     const editValue = prompt("Edit your text", item.toDo);
    const editedToDo = toDos.map((toDo) =>
    toDo.id == item.id ? {...toDo, toDo: editValue} : toDo)
    setToDos(editedToDo)
  }

  function InputValueRemove(item) {
    const filteredToDo = toDos.filter((toDo) => toDo.id !== item.id);
    setToDos(filteredToDo);
  }

  return (
        <div>
            {toDos.map((item) => {
                return(
                <div className="toDo-items">
                    <div className="to-do-item"> <input  type="checkbox" id="checkbox"/>{item.toDo}<FontAwesomeIcon style = {{marginLeft: "10px"}} color = {"purple"} icon = {faPenToSquare} onClick = {() =>EditToDoValue(item)}></FontAwesomeIcon><button onClick = {() =>InputValueRemove(item)} className="remove">Remove</button></div>
                </div>

                )
            })

            }
        </div>
  );
}

export default ToDoCont;













