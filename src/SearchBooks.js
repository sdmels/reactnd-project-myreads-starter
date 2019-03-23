import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

let timeout;
class SearchBooks extends Component {

  state = {
    query: '',
    newBooks: []
  };

  updateQuery = (value) => {
    clearTimeout(timeout);
    this.setState( () => ({
      query: value.trim()
    }));

    timeout = setTimeout(() => {
      BooksAPI.search(this.state.query)
        .then( (newBooks) => {
          this.setState( () => ({
            newBooks
          }))
        });
    }, 300);
  }

  render() {
    const { query, newBooks } = this.state;
    const { onAddBook } = this.props;

    return(
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">

            <input type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={ (event) => this.updateQuery(event.target.value)}
              />

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {
              newBooks && newBooks.length > 0 && newBooks.map( book => (
                // <pre>JSON.stringify(book)</pre>
                <Book
                  key={book.id}
                  book={book}
                  onUpdateShelf={ (value, book) => onAddBook(value, book)}
                  />
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

SearchBooks.propTypes = {
  onAddBook: PropTypes.func.isRequired
}

export default SearchBooks;
