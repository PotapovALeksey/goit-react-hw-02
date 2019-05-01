import styled from 'styled-components';

export const BalanceWrap = styled.section`
  padding: 20px;
  border: 1px solid #464646;
  margin: 10px auto;
  display: flex;
  justify-content: center;
`;

export const Span = styled.span`
  font-size: 18px;

  :not(:last-child) {
    margin-right: 30px;
  }
`;
