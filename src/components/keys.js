import React from 'react';
import './Calculator.css';
import PropTypes from 'prop-types';

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

const KeysRaw = (props) => {
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
};

export default KeysRaw;
