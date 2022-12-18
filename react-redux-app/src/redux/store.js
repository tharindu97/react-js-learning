import { createStore, combineReducers, applyMiddleware }  from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import albumReducer from './album/albumReducer';
import fruitReducer from './fruit/fruitReducer';

const rootReducer = combineReducers({
    fruit: fruitReducer,
    album: albumReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;