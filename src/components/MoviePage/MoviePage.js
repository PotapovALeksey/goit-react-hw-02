import React, { Component } from 'react';
import Container from './MoviePage.styled';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import movies from '../../bd/movies.json';

const notMutch = 'No matching results';

const filterMovies = (value, films) => {
  return films.filter(film =>
    film.title.toLowerCase().includes(value.toLowerCase()),
  );
};

export default class MoviePage extends Component {
  state = { value: '' };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    const filteredMovies = filterMovies(value, movies);
    return (
      <Container>
        <SearchBar value={value} onChange={this.handleChange} />
        {filteredMovies.length > 0 ? (
          <MovieGrid items={filteredMovies} />
        ) : (
          <div>{notMutch}</div>
        )}
      </Container>
    );
  }
}
