import React from 'react';
import './Calculator.css';

const raw1 = ['AC', '+/-', '%', '÷'];
const raw2 = ['7', '8', '9', 'X'];
const raw3 = ['4', '5', '6', '-'];
const raw4 = ['1', '2', '3', '+'];
const raw5 = ['0', '.', '='];

const raw1List = [];
raw1.forEach((item) => {
  raw1List.push(<button type="button" className="col-3">{item}</button>);
});

const raw2List = [];
raw2.forEach((item) => {
  raw2List.push(<button type="button" className="col-3">{item}</button>);
});

const raw3List = [];
raw3.forEach((item) => {
  raw3List.push(<button type="button" className="col-3">{item}</button>);
});

const raw4List = [];
raw4.forEach((item) => {
  raw4List.push(<button type="button" className="col-3">{item}</button>);
});

const raw5List = [];
let count = 0;
raw5.forEach((item) => {
  let cl = 'col-3';
  if (count === 0) {
    cl = 'col-6';
  }
  raw5List.push(<button type="button" className={cl}>{item}</button>);
  count += 1;
});

function Calculator() {
  return (
    <div className="Calculator-box">
      <div className="Display d-flex align-items-center justify-content-end p-2 h2 m-0">
        0
      </div>
      <div className="Calculator-body">
        <div className="raw">
          { raw1List }
        </div>
        <div className="raw">
          { raw2List }
        </div>
        <div className="raw">
          { raw3List }
        </div>
        <div className="raw">
          { raw4List }
        </div>
        <div className="raw">
          { raw5List }
        </div>
      </div>
    </div>
  );
}

export default Calculator;
