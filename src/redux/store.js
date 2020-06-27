import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './reducers';
import rootsaga from './sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
export default createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
