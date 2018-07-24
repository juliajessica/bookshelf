export function selectBook(book){
  //console.log('A book has been selected' +  ' ' + book.title);
  //select book is an action creator that needs to return an action,
  //an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
//name & purpose of the action described
//payload - condition of the action being triggered
