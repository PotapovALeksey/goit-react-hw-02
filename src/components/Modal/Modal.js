import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { BackDrop, Content, Text, Button } from './Modal.styled';

export default class Modal extends Component {
  static propTypes = {
    text: PropTypes.string,
    onClose: PropTypes.func.isRequired,
  };

  static defaultProps = {
    text: 'Sorry! Is ERROR!',
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && current !== e.target) return;

    this.props.onClose();
  };

  render() {
    const { text, onClose } = this.props;
    return (
      <BackDrop ref={this.backdropRef} onClick={this.handleBackdropClick}>
        <Content>
          <Text>{text}</Text>
          <Button onClick={onClose}>close</Button>
        </Content>
      </BackDrop>
    );
  }
}
