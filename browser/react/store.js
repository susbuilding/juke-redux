import { createStore, applyMiddleware, combineReducers } from 'redux';
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const middleware = applyMiddleware(logger, thunkMiddleware);
const reducers = combineReducers({
    lyric: lyricsReducer,
    player: playerReducer
});


const store = createStore(reducers, composeWithDevTools(middleware));


export default store;
