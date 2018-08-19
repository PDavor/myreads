import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import SearchPage from "./SearchPage";
import MainPage from "./MainPage";
import { Route } from "react-router-dom";

class BooksApp extends Component {
  state = {
    books: []
  };
  //get books from server
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    })
  };
  //update shelf when book is moved
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    //refresh when book changes shelf
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    })
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <MainPage books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <SearchPage books={this.state.books} moveShelf={this.moveShelf} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
