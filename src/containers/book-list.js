import React, { Component } from 'react';
import { connect } from 'react-redux'; //connects react & redux to flow data
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render(){
    return(
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}
function mapStateToProps(state){
  return {
    books: state.books
  };

}//whatever gets returned from here will return as props inside of the booklist class.
//if our state ever changed this function will automatically rerender

function mapDispatchToProps(dispatch){
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}//bindActionCreators and dispatch will take what gets returend fromw selectbook & pass it to all reducers

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
//connect(react-redux) takes a function & a component and produces a container. a container is a component that is aware of the state that is contained by redux.
