import React, { Component } from 'react';
import Shelf from './Shelf'

class ListBooks extends Component {

  render() {
    const { books, onMoveBook, shelves } = this.props;

    return (
      <div className='list-books'>
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.length && shelves.map(shelf =>
              <div className="bookshelf" key={shelf.id}>
                <Shelf
                  shelves={shelves}
                  shelf={shelf}
                  books={books}
                  onMoveBook={onMoveBook}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ListBooks
