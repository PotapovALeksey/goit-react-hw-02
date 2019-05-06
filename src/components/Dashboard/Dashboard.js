import React, { Component } from 'react';
import styled from 'styled-components';
import uuidv1 from 'uuid/v1';
import Balance from './Balance/Balance';
import Controls from './Controls/Controls';
import TransactionHistory from './TransactinoHistory/TransactionHistory';

const operations = {
  DEPOSIT: 'Deposit',
  WITHDRAW: 'Withdraw',
};

const Container = styled.div`
  width: 520px;
  margin: 20px auto;
`;

export default class Dashboard extends Component {
  state = {
    history: [],
    balance: 3000,
  };

  componentDidMount() {
    const localStorageHistory = JSON.parse(localStorage.getItem('history'));
    if (localStorageHistory) {
      const { balance } = this.state;
      const newBalance = this.countBalanceFirstLoad(
        localStorageHistory,
        balance,
      );

      this.setState({ history: localStorageHistory, balance: newBalance });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { history } = this.state;

    if (prevState.history !== history) {
      localStorage.setItem('history', JSON.stringify(history));
    }
  }

  handleAddTransaction = (value, type) => {
    const transaction = {
      id: uuidv1(),
      type,
      amount: value,
      date: new Date().toLocaleString(),
    };

    if (type === operations.DEPOSIT) this.plusBalance(value);
    if (type === operations.WITHDRAW) this.minusBalance(value);

    this.setState(state => ({ history: [...state.history, transaction] }));
  };

  minusBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }));
  };

  plusBalance = value => {
    this.setState(prevState => ({
      balance: prevState.balance + value,
    }));
  };

  countBalanceByType = (history, type) => {
    return history.reduce((acc, item) => {
      let total = acc;

      total += item.type === type ? item.amount : 0;

      return total;
    }, 0);
  };

  countBalanceFirstLoad = (history, balance) => {
    return history.reduce((acc, item) => {
      let total = acc;

      total += item.type === operations.DEPOSIT ? item.amount : 0;
      total -= item.type === operations.WITHDRAW ? item.amount : 0;

      return total;
    }, balance);
  };

  render() {
    const { history } = this.state;
    const { balance } = this.state;
    const profitBalance = this.countBalanceByType(history, operations.DEPOSIT);
    const expenseBalance = this.countBalanceByType(
      history,
      operations.WITHDRAW,
    );

    return (
      <Container>
        <Controls
          handleAddTransaction={this.handleAddTransaction}
          balance={balance}
        />
        <Balance
          balance={balance}
          income={profitBalance}
          expenses={expenseBalance}
        />
        <TransactionHistory items={history} />
      </Container>
    );
  }
}
