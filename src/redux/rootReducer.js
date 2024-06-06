// combines different reducers into single.

import {combineReducers} from 'redux';
// import all your reducers.
import { reducer } from './reducer';

// now combine.

export default combineReducers({
    reducer
})