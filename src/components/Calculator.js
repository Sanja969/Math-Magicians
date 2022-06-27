import React from 'react';
import ReactDOM from 'react-dom/client';
import './Calculator.css';

let raw1 = ['AC', '+/-', '%', '÷'];
let raw2 = ['7', '8', '9', 'X'];
let raw3 = ['4', '5', '6', '-'];
let raw4 = ['1', '2', '3', '+'];
let raw5 = ['0', '.', '='];

let raw1List =  raw1.map((item, index) => {
  return <button className="col-3" key = {index}>{item}</button>;
})

let raw2List =  raw2.map((item, index) => {
  return <button className="col-3" key = {index}>{item}</button>;
})

let raw3List =  raw3.map((item, index) => {
  return <button className="col-3" key = {index}>{item}</button>;
})

let raw4List =  raw4.map((item, index) => {
  return <button className="col-3" key = {index}>{item}</button>;
})

let raw5List =  raw5.map((item, index) => {
  let cl = 'col-3'
  if(index===0) {
    cl = 'col-6';
  }
  return <button className={ cl } key = {index}>{item}</button>;
})

const Calculator = () => {

  return (
      <div className='Calculator-box'>
        <div className='Display d-flex align-items-center justify-content-end p-2 h2 m-0'>
          0
        </div>
        <div className='Calculator-body'>
          <div className='raw'>
            { raw1List }
          </div>
          <div className='raw'>
            { raw2List }
          </div>
          <div className='raw'>
            { raw3List }
          </div>
          <div className='raw'>
            { raw4List }
          </div>
          <div className='raw'>
            { raw5List }
          </div>
        </div>
      </div>
  )
}



export default Calculator;