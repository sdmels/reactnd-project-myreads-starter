import React from 'react'
import { Route } from 'react-router-dom';
import './App.css'

import SearchBooks from './SearchBooks';
import BooksWrapper from './BooksWrapper';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState( () => ({
        books
      }));
    });
  }

  handleUpdateBook = (newShelfValue, book) => {
    this.setState( (currentState) => ({
      books: currentState.books.map( b => {
        if (b.id === book.id) {
          book.shelf = newShelfValue;
        }
        return b;
      })
    }), () => {
      BooksAPI.update(book, newShelfValue)
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
          <BooksWrapper
            books={books}
            onUpdateBook={ (value, bookId) => this.handleUpdateBook(value, bookId)}/>
        )} />

        <Route path='/search' render={ () => (
          <SearchBooks />
        )} />
      </div>
    )
  }
}

export default BooksApp
