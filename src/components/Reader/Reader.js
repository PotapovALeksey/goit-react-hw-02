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
  };

  state = {
    index: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      index: state.index + 1,
    }));
  };

  handlePrev = () => {
    this.setState(state => ({
      index: state.index - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    const lastIndex = items.length;

    return (
      <StyledReader>
        <Publication item={items[index]} />
        <Counter index={index + 1} lastIndex={lastIndex} />
        <Controls
          currentPage={index}
          lastPage={lastIndex}
          onHandlePrev={this.handlePrev}
          onHandleNext={this.handleNext}
        />
      </StyledReader>
    );
  }
}
