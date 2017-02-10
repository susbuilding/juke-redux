import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunkMiddleware);

const store = createStore(reducer, composeWithDevTools(middleware));


export default store;
