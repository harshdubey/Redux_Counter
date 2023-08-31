// This is used to COMBINE all THE REDUCERS ALLTOGETHER!
import { combineReducers } from 'redux';
import {upDownReducer} from './upDownReducer';

const rootReducer = combineReducers({upDownReducer});

export default rootReducer;
