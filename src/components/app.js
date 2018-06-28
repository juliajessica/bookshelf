import React, { Component } from 'react'; //this imports component and react together
import BookList from '../containers/book-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
