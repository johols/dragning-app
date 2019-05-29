import axios from 'axios';

export function fetchPresentations() {
  return function(dispatch){
    dispatch({type: 'FETCH_PRESENTATIONS'});


  axios.get('http://localhost:3301/talks')
    .then((response) => {
      dispatch({type: 'FETCH_PRESENTATIONS_FULFILLED', payload:response.data})
    })
    .catch((err) => {
      dispatch({type: 'FETCH_PRESENTATIONS_REJECTED', payload: err})
    })
  }
}