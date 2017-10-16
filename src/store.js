import { combineReducers, createStore } from 'redux';
import todoListApp from './reducers/index';

const reducers = combineReducers({
  todoListApp,
});

export default createStore(reducers)