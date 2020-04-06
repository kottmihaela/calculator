import React, {useState} from 'react';

export const Counter=()=>{
  const [counter,setCounter]=useState(0);
  return(
    <div className={"counter-container"}>
      <span className={"number"}>
        {counter}
      </span>
      <button onClick={() => {
        setCounter(counter+1)
      }}>
        click
      </button>
    </div>
  )
}
