import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
// distributes through reducers
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map( book => {
      return (
        <li onClick={()=>this.props.selectBook(book)}
            key={book.title} 
            className="list-group-item">{book.title}
        </li>
      );
    });
  }

  render() {
    return(
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}
// Whenever application state changes, component auto re-renders
function mapStateToProps(state) {
  // whatever is returned will show up as a 
  //props inside of BookList
  return {
    books: state.books
  };
}
// Anything returned from this function will end up as 
// props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, 
  // pass result(object) to all reducers
  // available as props in container
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know 
// about this new dispatch method, selectBook.  Make it 
//available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);