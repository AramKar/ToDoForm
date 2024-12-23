import React, { useState } from "react";



function Counter() {
    const [count, SetCount] = useState(0);

    let handleIncrement = () => {
        SetCount(count + 1);
        console.log(count, "count");
    };

    let  ResetCounter = () => {
        SetCount(0);

    }

    return (
        <div className="counter">
            <h1>Count:{count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={ResetCounter}></button>
        </div>
    );


}


export default Counter;

























