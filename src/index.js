import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyD_9thmgm3uYbyA1J5Hw472fu2SahscN3U';

// Create a new component. This component
// should produce HTML
// Take this component's generated HMTL and put in
// in the DOM(on the page)
// ES6 declaring variable const like var

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
