export default function reducer(state={ fetching: false }, action) {

    switch (action.type){
      case "FETCH_PRESENTATIONS": {
        return {...state, fetching: true}
      }
      case 'FETCH_PRESENTATIONS_FULFILLED': {
        return {
          ...state,
          fetching: false,
          fetched: true,
          presentations: action.payload
        }
      }
      case 'FETCH_PRESENTATIONS_REJECTED': {
        return {...state, fetching: false, error: action.payload }
      }
      default: 
        return state;
    }
}  

