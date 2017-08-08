import React, { Component } from 'react';
import Book from './Book'

class Shelf extends Component {

  render() {
    const { shelves, shelf, books, onMoveBook } = this.props;
    const booksOnShelf = books.filter(book => book.shelf === `${shelf.id}`);

    return (
      <div>
        <h2 className="bookshelf-title">{shelf.label}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf.length && booksOnShelf.map(book =>
              <li key={book.id}>
                <Book
                  shelves={shelves}
                  book={book}
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

export default Shelf
