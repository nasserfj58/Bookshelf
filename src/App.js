import React from 'react'
import { getAll, update } from './BooksAPI'
import { Link } from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf';

class BooksApp extends React.Component {
  state = {
    books: [],
  }
  _isMounted = false;
  componentDidMount() {
    getAll().then(allBooks => this.setState((oldState) => ({
      books: allBooks,
    })));
    this._isMounted = true;
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  changeShelf = (book, shelf) => {

    if (book.shelf === shelf || !shelf)
      return;

    update(book, shelf);

    // For Unmounted Copmonent Warrning Issue
    if (this._isMounted) {
      // Make sure that old book have new desired shelf
      book.shelf = shelf;
      //Remove Old Book and add the new shelf book
      this.setState(oldState => ({
        books: oldState.books.filter(b => b.id !== book.id).concat(book)
      }))
    }
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelf Title="Currently Reading" Books={this.state.books.filter(book => book.shelf === "currentlyReading")} ChangeShelf={this.changeShelf} />
              <BookShelf Title="Want to Read" Books={this.state.books.filter(book => book.shelf === "wantToRead")} ChangeShelf={this.changeShelf} />
              <BookShelf Title="Read" Books={this.state.books.filter(book => book.shelf === "read")} ChangeShelf={this.changeShelf} />
            </div>
          </div>
          <div className="open-search">
            <Link to={{ pathname: '/search', ChangeShelf: this.changeShelf, shelfBooks : this.state.books }}>
              <button>
                Add A Book
            </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default BooksApp
