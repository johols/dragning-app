import presentations from './presentationsReducer';
import details from './detailsReducer';
import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    presentations,
    details
});
export default rootReducer;
