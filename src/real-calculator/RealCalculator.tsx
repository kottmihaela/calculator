import React, {useState} from 'react';
import './RealCalculator.scss';
import {CalculatorButton} from './components/calculator-button/CalculatorButton';

export const RealCalculator = () => {
  const [display, setDisplay] = useState('0');
  const numberClick = (value: string) => {
    if (display.length >= 16) {
      return false;
    }
    if (display === '0') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const formatDisplay = (value: string) => {
    let withComma = '';

    let len = value.length - 1;
    let i = len;
    let counter=0;
    for (i; i >= 0; i--) {
      withComma = value[i] + withComma ;
      counter++;
      if (counter===3 && i>0){
        withComma=',' + withComma;
        counter = 0 ;
      }

    }

    return withComma;
  };

  return (
    <div className={'main-container'}>
      <div className={'calculator-container'}>
        <div className={'display'}>
          <span className={'display-number'}>{formatDisplay(display)}</span>
        </div>
        <div className={'keyboard'}>
          <div className={'row'}>
            <CalculatorButton color={'btn-light'} text={'%'}/>
            <CalculatorButton color={'btn-light'} text={'CE'}/>
            <CalculatorButton color={'btn-light'} text={'C'}/>
            <CalculatorButton color={'btn-light'} text={'<='}/>
          </div>
          <div className={'row'}>
            <CalculatorButton color={'btn-light'} text={'1/x'}/>
            <CalculatorButton color={'btn-light'} text={'x^2'}/>
            <CalculatorButton color={'btn-light'} text={'x^3'}/>
            <CalculatorButton color={'btn-light'} text={'/'}/>
          </div>
          <div className={'row'}>
            <CalculatorButton color={'btn-dark'} text={'7'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'8'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'9'} onClick={numberClick}/>
            <CalculatorButton color={'btn-light'} text={'*'}/>
          </div>
          <div className={'row'}>
            <CalculatorButton color={'btn-dark'} text={'4'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'5'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'6'} onClick={numberClick}/>
            <CalculatorButton color={'btn-light'} text={'-'}/>
          </div>
          <div className={'row'}>
            <CalculatorButton color={'btn-dark'} text={'1'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'2'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'3'} onClick={numberClick}/>
            <CalculatorButton color={'btn-light'} text={'+'}/>
          </div>
          <div className={'row'}>
            <CalculatorButton color={'btn-dark'} text={'+/-'}/>
            <CalculatorButton color={'btn-dark'} text={'0'} onClick={numberClick}/>
            <CalculatorButton color={'btn-dark'} text={'.'}/>
            <CalculatorButton color={'btn-blue'} text={'='}/>
          </div>

        </div>
      </div>
      <div className={'memory-container'}>

      </div>
    </div>
  );
};
