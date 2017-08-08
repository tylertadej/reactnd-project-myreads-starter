import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';

class SearchBooks extends Component {

  render() {
    const { shelves, searchResults, onMoveBook, onUpdateQuery } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={(event) => onUpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchResults && searchResults.map(book =>
              <li key={book.id}>
                <Book
                  book={book}
                  shelves={shelves}
                  onMoveBook={onMoveBook}
                  />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
