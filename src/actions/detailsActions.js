import axios from 'axios';

export function fetchDetails(id) {
  return function(dispatch){
    dispatch({type: 'FETCH_DETAILS'});


  axios.get('http://localhost:3301/talks/' + id)
    .then((response) => {
      dispatch({type: 'FETCH_DETAILS_FULFILLED', payload:response.data})
    })
    .catch((err) => {
      dispatch({type: 'FETCH_DETAILS_REJECTED', payload: err})
    })
  }
}