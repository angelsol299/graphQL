import React, { Component } from "react";
//components
import BookList from "./components/BookList";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>hola welcome to my reading list</h1>
        <BookList />
      </div>
    );
  }
}

export default App;
