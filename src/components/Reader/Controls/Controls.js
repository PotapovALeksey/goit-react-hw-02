import React from 'react';
import PropTypes from 'prop-types';
import { ControlsStyled, ButtonPrev, ButtonNext } from './Controls.styled';

const Controls = ({ isPrev, isNext, onDecrement, onIncrement }) => (
  <ControlsStyled>
    <ButtonPrev
      onClick={onDecrement}
      isPrev={isPrev}
      disable={!isPrev ? 'disable' : null}
    >
      Previous
    </ButtonPrev>
    <ButtonNext
      onClick={onIncrement}
      isNext={isNext}
      disable={!isNext ? 'disable' : null}
    >
      Next
    </ButtonNext>
  </ControlsStyled>
);

Controls.defaultProps = {
  isPrev: false,
  isNext: false,
};

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  isPrev: PropTypes.bool,
  isNext: PropTypes.bool,
};

export default Controls;
