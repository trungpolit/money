import {RATIO, INITIAL_STATE} from '../constants/counters';
import {
    CHANGE_COUNT,
    RESET_COUNT,
    CHANGE_REAL,
    START_AUTOSAVE,
    FINISH_AUTOSAVE,
    FAIL_AUTOSAVE,
    START_GET_AUTOSAVE,
    FINISH_GET_AUTOSAVE,
    FAIL_GET_AUTOSAVE,
} from '../constants/actionTypes';
const numeral = require('numeral');
const initialState = INITIAL_STATE;
const calculate = function (state) {
    let totalPrice = 0;
    for (let prop in state.rows) {
        let element = state.rows[prop];
        if (!element.count || !element.totalPrice) {
            continue;
        }
        totalPrice += element.totalPrice;
        state.rows[prop] = element;
    }
    state.totalPrice = totalPrice;
    return state;
};
const moneyCounterReducer = (state = initialState, action) => {
    let newState;
    let rowsTmp;
    let label;
    let index;
    let count;
    switch (action.type) {
        case CHANGE_COUNT:
            index = action.index;
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            count = numeral(action.count).value();
            rowsTmp[index].count = count;
            label = initialState.rows[index].label;
            rowsTmp[index].totalPrice = count * parseInt(label) * parseInt(RATIO);
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return Object.assign({}, state, newState);
        case RESET_COUNT:
            return Object.assign({}, initialState);
        case CHANGE_REAL:
            return Object.assign({}, state, {totalRealPrice: numeral(action.price).value()});
        // Thực hiện xử lý cho autosave
        case START_AUTOSAVE:
            return Object.assign({}, state, {isAutoSaving: 1});
        case FINISH_AUTOSAVE:
            return Object.assign({}, state, {
                isAutoSaving: 0,
                lastAutoSaved: action.lastAutoSaved,
                autoSaveStatus: 1,
                autoSaveErrors: null
            });
        case FAIL_AUTOSAVE:
            return Object.assign({}, state, {
                isAutoSaving: 0,
                autoSaveStatus: 0,
                lastAutoSaved: ation.lastAutoSaved,
                autoSaveErrors: action.errors
            });
        case START_GET_AUTOSAVE:
            return Object.assign({}, state, {isGettingAutoSave: 1});
        case FINISH_GET_AUTOSAVE:
            return Object.assign({}, state, {
                isGettingAutoSave: 0,
                lastGetAutoSaved: action.lastGetAutoSaved,
                autoSaveStatus: 1,
                autoSaveErrors: null,
                rows: action.rows,
                totalPrice: action.totalPrice,
                totalRealPrice: action.totalRealPrice,
            });
        case FAIL_GET_AUTOSAVE:
            return Object.assign({}, state, {
                isGettingAutoSave: 0,
                lastGetAutoSaved: action.lastGetAutoSaved,
                autoSaveStatus: 0,
                autoSaveErrors: action.errors,
            });
        default:
            return state;
    }
};

module.exports = moneyCounterReducer;