import styled from 'styled-components';

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(37, 45, 58, 0.7);
`;

export const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 50vw;
  background-color: #fff;
`;

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
`;

export const Button = styled.button`
  color: #464646;
  font-size: 16px;
`;
