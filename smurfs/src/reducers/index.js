import { combineReducers } from 'redux';
import smurfReducer from './smurfReducer';

export default combineReducers({
    smurfs: smurfReducer
})