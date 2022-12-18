import { createStore, combineReducers, applyMiddleware, compose }  from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import albumReducer from './album/albumReducer';
import fruitReducer from './fruit/fruitReducer';

const rootReducer = combineReducers({
    fruit: fruitReducer,
    album: albumReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;