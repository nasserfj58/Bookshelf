import React from 'react';
import Book from './Book';

function BookShelf(props) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.Title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        props.Books.map((book) => {
                            return <li key={book.id}>
                                <Book
                                    BookDetails = {book}
                                    ChangeShelf = {props.ChangeShelf}
                                />
                            </li>
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default BookShelf;