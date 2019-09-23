import React from 'react'

function Book(props) {
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.BookDetails && props.BookDetails.imageLinks && props.BookDetails.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                    <select  onChange={(event)=>{props.ChangeShelf(props.BookDetails,event.target.value)}}>
                        <option value="">Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{ props.BookDetails && props.BookDetails.title}</div>
            <div className="book-authors">{props.BookDetails && props.BookDetails.authors && props.BookDetails.authors.map(author => {
                return <p key={author}>{author}</p>
            })}</div>
        </div>);
}

export default Book