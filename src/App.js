import React from 'react'
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css'

import SearchBooks from './SearchBooks';
import BooksWrapper from './BooksWrapper';

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <BooksWrapper />
        )} />

        <Route path='/search' render={ () => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
