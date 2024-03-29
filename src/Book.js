import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              //check if book has thumbnail and show it has(prevent error)
              backgroundImage: `url("${
                this.props.book.imageLinks
                  ? this.props.book.imageLinks.thumbnail
                  : ""
              })"`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={event =>
                this.props.moveShelf(this.props.book, event.target.value)
              }
              value={this.props.currentShelf}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
