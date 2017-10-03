import { combineReducers } from 'redux';

import loading from './reducer_loading';

const rootReducer = combineReducers(
    { loading }
);

export default rootReducer;