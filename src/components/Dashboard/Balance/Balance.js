import React from 'react';
import PropTypes from 'prop-types';
import { BalanceWrap, Span } from './Balance.styled';

const Balance = ({ profit, expense, balance }) => (
  <BalanceWrap>
    <Span role="img" aria-label="icon">
      ⬆{profit}$
    </Span>
    <Span role="img" aria-label="icon">
      ⬇{expense}$
    </Span>
    <Span>Balance: {balance}$</Span>
  </BalanceWrap>
);

Balance.defaultProps = {
  profit: 0,
  expense: 0,
  balance: 0,
};

Balance.propTypes = {
  profit: PropTypes.number,
  expense: PropTypes.number,
  balance: PropTypes.number,
};

export default Balance;
