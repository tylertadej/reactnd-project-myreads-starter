import React from 'react'
import { Route, Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: [],
      searchResults: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelfId) => {
    BooksAPI.update(book, shelfId).then((shelves) => {
      book.shelf = shelfId;
      this.setState(state => ({
        books: this.state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }

  updateQuery = (query) => {
    BooksAPI.search(query, 20).then((response) => {
      if (response.error) return;

      let displayBooks = response.map(b => {
        b.shelf = 'none'

        this.state.books.forEach(book => {
          if (book.id === b.id) { b.shelf = book.shelf }
        })

        return b
      })

      this.setState(state => ({
        searchResults: displayBooks
      }))
    })
  }

  render() {
    const shelves = [
      {
        id: "currentlyReading",
        label: "Currently reading"
      },
      {
        id: "wantToRead",
        label: "Want to read"
      },
      {
        id: "read",
        label: "Read"
      }
    ]

    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <ListBooks
              books={this.state.books}
              onMoveBook={this.moveBook}
              shelves={shelves}
              />
            <div className='open-search'>
              <Link to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            shelves={shelves}
            searchResults={this.state.searchResults}
            onMoveBook={this.moveBook}
            onUpdateQuery={this.updateQuery}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
