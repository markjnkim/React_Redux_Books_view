import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
    render() {
      return <input onChange={event => console.log(event.target.value)} />;
    }

    }
}

//ReactDOM.render(<SearchBar />);

export default SearchBar;
