import React, { useState } from 'react';
import KeysRaw from './keys';
import './Calculator.css';
import calculate from '../logic/calculate';

const raw1 = ['AC', '+/-', '%', '÷'];
const raw2 = ['7', '8', '9', 'x'];
const raw3 = ['4', '5', '6', '-'];
const raw4 = ['1', '2', '3', '+'];
const raw5 = ['0', '.', '='];

const Calculator = () => {
  const [obj, setObj] = useState({ total: '0', next: null, operation: null });
  const { total, next, operation } = obj;

  const handleClick = (value) => {
    setObj(calculate(obj, value));
  };

  return (
    <div className="Calculator-box">
      <div className="Display d-flex align-items-center justify-content-end p-2 h2 m-0">
        {total}
        {operation}
        {next}
      </div>
      <div className="Calculator-body">
        <div className="raw">
          <KeysRaw raw={raw1} handleClick={handleClick} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw2} handleClick={handleClick} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw3} handleClick={handleClick} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw4} handleClick={handleClick} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw5} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
