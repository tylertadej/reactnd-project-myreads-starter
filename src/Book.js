import React, { Component } from 'react';

class Book extends Component {

  render() {
    const { shelves, book, onMoveBook } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={(event) => onMoveBook(book, event.target.value)}>
              <option value="none" disabled>Move to...</option>
              {shelves.length && shelves.map(shelf =>
                <option key={shelf.id} value={shelf.id}>{shelf.label}</option>
              )}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.length && book.authors.map(author =>
          <div className="book-authors" key={author}>{author}</div>
        )}
      </div>
    )
  }
}

export default Book
