import {createStore} from 'redux';
import reducer from './reducers/reducer'
import {initialState} from './reducers/reducer';

const store = createStore(reducer, initialState);

export default store;