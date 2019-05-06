import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlsWrap, Input, Button } from './Controls.styled';

export default class Controls extends Component {
  state = {
    value: '',
  };

  static propTypes = {
    handleAddTransaction: PropTypes.func.isRequired,
    balance: PropTypes.number.isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };

  handleChange = ({ target: { value } }) => {
    const valueNum = Number(value);
    this.setState({ value: valueNum });
  };

  handleClickDeposit = e => {
    const { value } = this.state;
    const { type } = e.target.dataset;
    const { onOpenModal } = this.props;
    if (this.isValidValue(value)) {
      onOpenModal('Введите сумму для проведения операции!');
      this.reset();
      return;
    }

    this.props.handleAddTransaction(value, type);

    this.reset();
  };

  handleClickWithdraw = e => {
    const { value } = this.state;
    const { balance, onOpenModal } = this.props;
    const { type } = e.target.dataset;

    if (this.isValidValue(value)) {
      onOpenModal('Введите сумму для проведения операции!');
      this.reset();
      return;
    }

    if (balance < value) {
      onOpenModal('На счету недостаточно средств для проведения операции!');
      this.reset();
      return;
    }
    this.props.handleAddTransaction(value, type);

    this.reset();
  };

  isValidValue = value => value === 0 || !value;

  reset = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <ControlsWrap>
        <Input type="number" value={value} onChange={this.handleChange} />
        <Button data-type="Deposit" onClick={this.handleClickDeposit}>
          Deposit
        </Button>
        <Button data-type="Withdraw" onClick={this.handleClickWithdraw}>
          Withdraw
        </Button>
      </ControlsWrap>
    );
  }
}
