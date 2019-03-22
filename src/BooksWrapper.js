import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import BookShelf from './BookShelf';

class BooksWrapper extends Component {

  render() {
    const bookRead = this.props.books.filter( book => book.shelf === 'read');
    const bookReading = this.props.books.filter( book => book.shelf === 'currentlyReading');
    const bookToRead = this.props.books.filter( book => book.shelf === 'wantToRead');
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf category='Currently Reading' booksByShelves={bookReading}/>
            <BookShelf category='Want to Read' booksByShelves={bookToRead}/>
            <BookShelf category='Read' booksByShelves={bookRead}/>
          </div>
        </div>
        <div className="open-search">
          {/* <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button> */}
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  }
}

BooksWrapper.propTypes = {
  books: PropTypes.array.isRequired
}

export default BooksWrapper;