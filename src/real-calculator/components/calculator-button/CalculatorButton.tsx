import React, {ClassAttributes} from 'react';
import "./CalculatorButton.scss";
interface Props extends ClassAttributes<any>{
  text:string;
  color:"btn-dark" | "btn-light" | "btn-blue";
}

export const CalculatorButton =(props:Props)=>{
  return(
    <button className={`btn ${props.color}`}>
      <span className={"btn-text"}>{props.text}</span>
    </button>
  )
}
