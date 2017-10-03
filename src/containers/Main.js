import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxApp from './ReduxApp';
// const store = '../utils/Store';
import { createStore, applyMiddleware } from 'redux';

//root reducer
import store from '../utils/Store';

export default class Main extends Component {
	render() {
		return (
			<Provider store={store}>
				<ReduxApp />
			</Provider>
		);
	}
}

