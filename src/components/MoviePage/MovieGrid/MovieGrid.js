import React from 'react';
import PropTypes from 'prop-types';
import MovieGridStyled from './MovieGrid.styled';
import MovieGridItem from '../MovieGridItem/MovieGridItem';

const MovieGrid = ({ items }) => (
  <MovieGridStyled>
    {items.map(item => (
      <MovieGridItem key={item.id} item={item} />
    ))}
  </MovieGridStyled>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired }))
    .isRequired,
};

export default MovieGrid;
