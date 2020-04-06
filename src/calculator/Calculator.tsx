import React, {useState} from 'react';

export const Calculator = () => {

  const [input1, setInput1] = useState(1);
  const [input2,setInput2] = useState(2);
  const [result,setResult] = useState(0);
  return (
    <div className={'calculator-container'}>
      <label>
        Input1:
        <input type={'number'} name={'Input1'}
               value={input1}
               onChange={(e) => {
                 setInput1(parseInt(e.target.value));
               }}/>
      </label>
      <label>
        Input2
        <input type={'number'} name={'Input2'}
               value={input2}
               onChange={(e)=>{
                setInput2(parseInt(e.target.value));
               }}/>
      </label>

        <span className={"number"}>
          Result:{result}
        </span>

      <button onClick={() => {
        setResult(input1+input2)
      }}>
      +
      </button>
      <button onClick={() => {
        setResult(input1*input2)
      }}>
        *
      </button>
      <button onClick={() => {
        setResult(input1-input2)
      }}>
        -
      </button>
      <button onClick={() => {
        setResult(input1/input2)
      }}>
        /
      </button>

    </div>
  );
};
