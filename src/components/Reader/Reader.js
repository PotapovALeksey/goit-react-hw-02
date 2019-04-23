import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

const StyledReader = styled.div`
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    step: PropTypes.number,
  };

  static defaultProps = {
    step: 1,
  };

  state = {
    index: 0,
  };

  handleIncrement = () => {
    this.setState(state => ({
      index: state.index + this.props.step,
    }));
  };

  handleDecrement = () => {
    this.setState(state => ({
      index: state.index - this.props.step,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const lastIndex = items.length;

    return (
      <StyledReader>
        <Publication item={items[index]} />
        <Counter index={index} lastIndex={lastIndex} />
        <Controls
          isPrev={index !== 0}
          isNext={index + 1 < lastIndex}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </StyledReader>
    );
  }
}
