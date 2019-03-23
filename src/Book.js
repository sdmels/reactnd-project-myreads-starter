import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

  state = {
    value: 'move'
  }

  handleOnChange = (event, book) => {
    const { value } = event.target;
    this.setState( () => ({
      value: value
    }), () => {
      this.props.onUpdateShelf(value, book)
    })
  }

  render() {
    const { book } = this.props;
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
            <div className="book-shelf-changer">
              <select
                value={this.state.value}
                onChange={ (event) => this.handleOnChange(event, book)}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
        </div>
      </li>
    );
  }
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onUpdateShelf: PropTypes.func.isRequired
}

export default Book;
