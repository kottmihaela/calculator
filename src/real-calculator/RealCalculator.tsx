import React from 'react';
import "./RealCalculator.scss";
import {CalculatorButton} from './components/calculator-button/CalculatorButton';
export const RealCalculator = ()=>{
  return(
    <div className={"calculator-container"}>
      <div className={"display"}>

      </div>
      <div className={"keyboard"}>
        <div className={"row"}>
         <CalculatorButton color={'btn-light'} text={"%"}/>
         <CalculatorButton color={'btn-light'} text={"CE"}/>
         <CalculatorButton color={'btn-light'} text={"C"}/>
         <CalculatorButton color={'btn-light'} text={"<="}/>
        </div>
        <div className={"row"}>
          <CalculatorButton color={'btn-light'} text={"1/x"}/>
          <CalculatorButton color={'btn-light'} text={"x^2"}/>
          <CalculatorButton color={'btn-light'} text={"x^3"}/>
          <CalculatorButton color={'btn-light'} text={"/"}/>
        </div>
        <div className={"row"}>
          <CalculatorButton color={'btn-dark'} text={"7"}/>
          <CalculatorButton color={'btn-dark'} text={"8"}/>
          <CalculatorButton color={'btn-dark'} text={"9"}/>
          <CalculatorButton color={'btn-light'} text={"*"}/>
        </div>
        <div className={"row"}>
          <CalculatorButton color={'btn-dark'} text={"4"}/>
          <CalculatorButton color={'btn-dark'} text={"5"}/>
          <CalculatorButton color={'btn-dark'} text={"6"}/>
          <CalculatorButton color={'btn-light'} text={"-"}/>
        </div>
        <div className={"row"}>
          <CalculatorButton color={'btn-dark'} text={"1"}/>
          <CalculatorButton color={'btn-dark'} text={"2"}/>
          <CalculatorButton color={'btn-dark'} text={"3"}/>
          <CalculatorButton color={'btn-light'} text={"+"}/>
        </div>
        <div className={"row"}>
          <CalculatorButton color={'btn-dark'} text={"+/-"}/>
          <CalculatorButton color={'btn-dark'} text={"0"}/>
          <CalculatorButton color={'btn-dark'} text={"."}/>
          <CalculatorButton color={'btn-blue'} text={"="}/>
        </div>

      </div>
    </div>
  )
}
