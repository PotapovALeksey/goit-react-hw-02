import styled from 'styled-components';

export const ControlsStyled = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;

export const Button = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0;
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  background-color: #3884ff;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  color: ${({ isDisabled }) => (isDisabled ? '#fff' : '#00000042')};
  background-color: ${({ isDisabled }) =>
    isDisabled ? '#3884ff' : '#0000001f'};
  pointer-events: ${({ isDisabled }) => (isDisabled ? 'auto' : 'none')};
  :hover {
    background-color: #1f65d6;
  }
`;

// export const ButtonPrev = styled(Button)`
//   color: ${({ isPrev }) => (isPrev ? '#fff' : '#00000042')};
//   background-color: ${({ isPrev }) => (isPrev ? '#3884ff' : '#0000001f')};
//   pointer-events: ${({ isPrev }) => (isPrev ? 'auto' : 'none')};
// `;

// export const ButtonNext = styled(Button)`
//   color: ${({ isNext }) => (isNext ? '#fff' : '#00000042')};
//   background-color: ${({ isNext }) => (isNext ? '#3884ff' : '#0000001f')};
//   pointer-events: ${({ isNext }) => (isNext ? 'auto' : 'none')};
// `;
