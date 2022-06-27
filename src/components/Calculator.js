import React, { useState } from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';
import calculate from '../logic/calculate';

const raw1 = ['AC', '+/-', '%', '÷'];
const raw2 = ['7', '8', '9', 'x'];
const raw3 = ['4', '5', '6', '-'];
const raw4 = ['1', '2', '3', '+'];
const raw5 = ['0', '.', '='];

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { handleClick, value } = this.props;
    handleClick(value);
  }

  render() {
    const { className, value } = this.props;
    return (
      <button type="button" className={className} onClick={this.handleClick}>
        {value}
      </button>
    );
  }
}

Key.propTypes = {
  className: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

function KeysRaw(props) {
  let count = 0;
  let cl = 'col-3';
  const rawList = [];
  props.raw.forEach((item) => {
    if (count === 0 && props.raw[0] === '0') {
      cl = 'col-6';
    } else {
      cl = 'col-3';
    }
    rawList.push(<Key className={cl} value={item} handleClick={props.handleClick} />);
    count += 1;
  });
  return rawList;
}

function Calculator() {
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
}

export default Calculator;
