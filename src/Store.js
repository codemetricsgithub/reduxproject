import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
// (payload)= contact written

const Store = createStore(rootReducer, composeWithDevTools());
export default Store;
