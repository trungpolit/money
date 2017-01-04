import {combineReducers} from 'redux';
import moneyReceiptReducer from './moneyReceiptReducer';
import moneyCounterReducer from './moneyCounterReducer';
const indexReducer = combineReducers({moneyReceiptReducer, moneyCounterReducer});

export default indexReducer;