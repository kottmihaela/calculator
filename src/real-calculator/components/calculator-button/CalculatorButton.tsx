import React, {ClassAttributes} from 'react';
import './CalculatorButton.scss';

interface Props extends ClassAttributes<any>{
  text:string;
  color:"btn-dark" | "btn-light" | "btn-blue";
  onClick?:(value:string)=>void;
}

export const CalculatorButton =(props:Props)=>{
  return(
    <button className={`btn ${props.color}`} onClick={() => {
      if(props.onClick){
        props.onClick(props.text)
      }
    }} >
      <span className={"btn-text"}>{props.text}</span>
    </button>
  )
}
