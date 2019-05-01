import React, { Fragment } from 'react';
import Reader from './Reader/Reader';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';
import publications from '../bd/publications.json';

const App = () => (
  <Fragment>
    <Reader items={publications} />
    <MoviePage />
    <Dashboard />
  </Fragment>
);

export default App;
