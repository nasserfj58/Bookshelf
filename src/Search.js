import React from 'react';
import { search } from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book'

class Search extends React.Component {
    state = {
        searchedBooks: []
    }
    getFilteredBooks = (query) => {
        if (query)
            search(query.trim()).then(books => this.setState((oldState) => ({
                searchedBooks: !books || books.error ? [] : books
            })));
        else
            this.setState((oldState) => ({
                searchedBooks: []
            }))

    }
    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search" />
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={(event) => this.getFilteredBooks(event.target.value)} />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.searchedBooks.map((book) => {
                            return <li key={book.id}>
                                <Book
                                    BookDetails = {book}
                                    ChangeShelf={this.props.location.ChangeShelf}
                                />
                            </li>
                        })
                    }
                </ol>
            </div>
        </div>)
    }
}

export default Search;