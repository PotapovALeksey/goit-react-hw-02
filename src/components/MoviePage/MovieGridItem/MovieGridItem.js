import React from 'react';
import PropTypes from 'prop-types';
import {
  MovieCard,
  Img,
  Content,
  Title,
  Paragraph,
} from './MovieGridItem.styed';

const MovieGridItem = ({ item: { posterUrl, title, overview } }) => (
  <MovieCard>
    <Img src={posterUrl} alt="poster-image" />
    <Content>
      <Title>{title}</Title>
      <Paragraph>{overview}</Paragraph>
    </Content>
  </MovieCard>
);

MovieGridItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    posterUrl: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieGridItem;
