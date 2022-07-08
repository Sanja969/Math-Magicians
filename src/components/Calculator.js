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
    <div className="Calculator-box w-75">
      <div className="Display d-flex align-items-center justify-content-end p-2 h2 m-0" title="display">
        {total}
        {operation}
        {next}
      </div>
      <div className="Calculator-body">
        <div className="raw">
          <KeysRaw raw={raw1} handleClick={handleClick} key={1} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw2} handleClick={handleClick} key={2} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw3} handleClick={handleClick} key={3} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw4} handleClick={handleClick} key={4} />
        </div>
        <div className="raw">
          <KeysRaw raw={raw5} handleClick={handleClick} key={5} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
