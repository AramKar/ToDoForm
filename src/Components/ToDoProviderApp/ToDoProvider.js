import React, {children, createContext, useState} from "react";

export const ToDoContext = createContext()



export function ToDoProvider({children}) {
    const [toDos, setToDos] = useState([{
        toDo: "Wash dishes", id: 1,
    },
    {
        toDo: "Clean Room", id: 2,
    },
    {
        toDo: "Clean Dust", id: 3,
    },
   
])
    return(
      <ToDoContext.Provider value={{toDos, setToDos}}>
        {children}
      </ToDoContext.Provider>  
    )
}

export default ToDoProvider;



















