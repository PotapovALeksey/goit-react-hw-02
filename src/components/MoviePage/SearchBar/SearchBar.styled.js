import styled from 'styled-components';

const SearchInput = styled.input`
  color: #171718;
  font-size: 16px;
  min-height: 38px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgb(179, 179, 179);
  width: 100%;
  outline: 0;
  transition: border-color 200ms ease-in-out;

  :focus {
    border-width: 2px;
    border-color: rgb(38, 132, 255);
  }
`;

export default SearchInput;
