import { combineReducers } from 'redux';
import react from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App';
import * as serviceworker from './serviceWorker';

import cardItems from '../Reducers';
export default combineReducers({
    cardItems,
});
