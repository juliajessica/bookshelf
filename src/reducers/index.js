import { combineReducers } from 'redux';
import booksReducer from './reducer_books';

const rootReducer = combineReducers({
  books: booksReducer
});

//books is the name we give our data array of books
export default rootReducer;
