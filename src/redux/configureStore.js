import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import sportReducer from './sports/sports';

const reducer = combineReducers({
  sportReducer,
  // additional reducers could be added here
});

const composed = compose(applyMiddleware(thunkMiddleware, logger));

const store = createStore(
  reducer,
  composed,
);

export default store;
