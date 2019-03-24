import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css'

import NoMatch from './NoMatch';
import SearchBooks from './SearchBooks';
import BooksWrapper from './BooksWrapper';
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
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

  handleAddBook = (newShelfValue, book) => {
    book['shelf'] = newShelfValue;
    BooksAPI.update(book, newShelfValue)
      .then( b => {
        this.getBooks();
      })
  }

  render() {
    const { books } = this.state;
    return (
      <div className="app">
	      <Switch>
            <Route exact path='/' render={ () => (
              <BooksWrapper
                books={books}
                onUpdateBook={ (value, book) => this.handleUpdateBook(value, book)}/>
            )} />

            <Route path='/search' render={ () => (
              <SearchBooks
                books={books}
                onAddBook={ (value, book) => this.handleAddBook(value, book)} />
            )} />   
			
			<Route component={NoMatch} />
      	</Switch>
      </div>
    )
  }
}

export default BooksApp
