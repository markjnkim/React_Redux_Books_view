// State argument is NOT application state, but 
// specific to the state of this reducer
export default function(state = null, action) {
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload; 
  }
  return state;
}