import { createStore, applyMiddleware } from 'redux';

//root reducer

import rootReducer from '../reducers/index';

export const defaultState = {
    loading: true
};

const store = createStore(
    rootReducer,
    defaultState,
);

export default store;


