import React from 'react';
import PropTypes from 'prop-types';
import { PublicationStyled, Title, Content } from './Publication.styled';

const Publication = ({ item: { id, title, text } }) => (
  <PublicationStyled key={id}>
    <Title>{title}</Title>
    <Content>{text}</Content>
  </PublicationStyled>
);
Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};
export default Publication;
