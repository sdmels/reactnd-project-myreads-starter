import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  render() {
    const {category, booksByShelves, onUpdateShelf} = this.props;

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{category}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              booksByShelves.map(book => (
                <Book
                key={book.id}
                book={book}
                onUpdateShelf={ (value, book) => onUpdateShelf(value, book)}/>
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
  booksByShelves: PropTypes.array.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default BookShelf;
