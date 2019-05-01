import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from './SearchBar.styled';

const SearchBar = ({ value, onChange }) => (
  <SearchInput type="text" value={value} onChange={onChange} />
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
