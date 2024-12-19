import { createStore, applyMiddleware } from 'redux';
import { thunk as reduxThunk } from 'redux-thunk';
import tasksReducer from './reducer';

const store = createStore(tasksReducer, applyMiddleware(reduxThunk));

export default store;
