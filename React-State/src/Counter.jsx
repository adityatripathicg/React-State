import { useState } from "react"

export default function Counter(){
    //let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0); // this statement does not re-render except this all are re-rendered.
    function incCount(){
        setCount((currCount)=>{
            return currCount + 1;
        });
        setCount((currCount)=>{
            return currCount + 1;
        });
        //console.log(count);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </div>
    )
}