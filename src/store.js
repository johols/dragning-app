import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import rootReducer from  './reducers';

const middleware = applyMiddleware(promise(), thunk);
export default(initialState) => {
    return createStore(
      rootReducer,
      initialState,
      compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
    );
    // return createStore(
    //   rootReducer,
    //   initialState,
    //   middleware
    // );
}
