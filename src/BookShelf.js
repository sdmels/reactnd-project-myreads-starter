import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const {category, booksByShelves} = this.props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              booksByShelves.map(book => (
                <Book key={book.id} book={book} />
              ))
            }
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  category: PropTypes.string.isRequired,
  booksByShelves: PropTypes.array.isRequired
}

export default BookShelf;
