import React, { Component } from 'react';


// Search bar should update youtube list
// and make an API youtube request
// Define Class SearchBar
// Transforms from Functional Component to a Class Component
//  Class component are reactive and communicative to other components
// Dynamic response(class component) vs. static response(functional component)
// Class components need render() { return <JSX>}
//  When to use what . . . .
// Useful specific for Search since it affects other components
// const SearchBar = () => {
//   return <input />;  //Reactcreate element
// };
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }
    render() {
      return (
        <div>
          <input onChange={event => this.setState({ term: event.target.value })} />
          Value of input: {this.state.term}
        </div>
      )
    }
};

//ReactDOM.render(<SearchBar />);

export default SearchBar;
