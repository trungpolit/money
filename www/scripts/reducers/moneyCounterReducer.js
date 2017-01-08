import {RATIO, INITIAL_STATE} from '../constants/counters';
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
    switch (action.type) {
        case 'CHANGE_COUNT':
            index = action.index;
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[index].count = parseInt(action.count);
            label = initialState.rows[index].label;
            rowsTmp[index].totalPrice = parseInt(action.count) * parseInt(label) * parseInt(RATIO);
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        case 'RESET_COUNT':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

module.exports = moneyCounterReducer;