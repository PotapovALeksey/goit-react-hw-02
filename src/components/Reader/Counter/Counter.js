import React from 'react';
import PropTypes from 'prop-types';
import CounterStyled from './Counter.styled';

const Counter = ({ index, lastIndex }) => (
  <CounterStyled>
    {index} /{lastIndex}
  </CounterStyled>
);

Counter.propTypes = {
  index: PropTypes.number.isRequired,
  lastIndex: PropTypes.number.isRequired,
};

export default Counter;
