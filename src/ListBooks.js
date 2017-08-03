import React, { Component } from 'react';
import Book from './Book'

class ListBooks extends Component {

  render() {
    const { books } = this.props;
    const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = books.filter(book => book.shelf === 'wantToRead');
    const read = books.filter(book => book.shelf === 'read');

    return (
      <div className='list-books'>
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {currentlyReading.length && currentlyReading.map((book) =>
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {wantToRead.length && wantToRead.map((book) =>
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {read.length && read.map((book) =>
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
