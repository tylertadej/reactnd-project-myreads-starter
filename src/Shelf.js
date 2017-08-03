import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
  moveBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId).then(() => {
      console.log(`${book.title} has been moved to ${shelfId}`);
    })
  }

  render() {
    const { shelves, shelf, books } = this.props;
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
                  onBookMove={this.moveBook}
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
