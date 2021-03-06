import React from 'react';
import { Link } from 'react-router-dom';

import { PropTypes } from 'prop-types';

import BookShelf from './BookShelf';

const BooksWrapper = (props) => {

 
    const booksRead = props.books.filter( book => book.shelf === 'read');
    const booksReading = props.books.filter( book => book.shelf === 'currentlyReading');
    const booksToRead = props.books.filter( book => book.shelf === 'wantToRead');
  
  
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              category='Currently Reading'
              onUpdateShelf={ (value, book ) =>  props.onUpdateBook(value, book)}
              booksByShelves={booksReading}/>
            <BookShelf
              category='Want to Read'
              onUpdateShelf={ (value, book ) =>  props.onUpdateBook(value, book)}
              booksByShelves={booksToRead}/>
            <BookShelf
              category='Read'
              onUpdateShelf={ (value, book ) =>  props.onUpdateBook(value, book)}
              booksByShelves={booksRead}/>
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    );
  
}

BooksWrapper.propTypes = {
  books: PropTypes.array.isRequired,
  onUpdateBook: PropTypes.func.isRequired
}

export default BooksWrapper;