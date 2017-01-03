const initialState = {
    taxPct: 0,
    rows: [
        {
            weight: 0,
            cost: 0,
            totalPrice: 0,
            costNoVat: 0,
            totalPriceNoVat: 0,
            totalTax: 0
        }, {
            weight: 0,
            cost: 0,
            totalPrice: 0,
            costNoVat: 0,
            totalPriceNoVat: 0,
            totalTax: 0
        }, {
            weight: 0,
            cost: 0,
            totalPrice: 0,
            costNoVat: 0,
            totalPriceNoVat: 0,
            totalTax: 0
        }
    ],
    totalPriceNoVat: 0,
    totalTax: 0,
    totalPrice: 0
};
const calculate = function (state) {
    // Nếu chưa có thông tin taxPct
    if (!state.taxPct) {
        return state;
    }
    let totalPriceNoVat = 0;
    let totalTax = 0;
    let totalPrice = 0;
    for (let index = 0; index < state.rows.length; index++) {
        let element = array[index];
        if (!element.weight || !element.cost) {
            continue;
        }
        element.totalTax = parseInt(element.cost) * parseInt(state.taxPct);
        totalTax += element.totalTax;

        element.totalPrice = parseInt(element.cost) * parseInt(element.weight);
        totalPrice += element.totalPrice;

        element.costNoVat = parseInt(element.cost) - element.totalTax;
        element.totalPriceNoVat = element.costNoVat * parseInt(element.weight);
        totalPriceNoVat += element.totalPriceNoVat;

        state.rows[index] = element;
    }
    return state;
};
import {CHANGE_TAX_PCT, CHANGE_COST, CHANGE_WEIGHT, RESET_RECEIPT} from '../constants/actionTypes';
const moneyReceiptReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_TAX_PCT:
            let newState = Object.assign({}, state, {taxPct: action.pct});
            newState = calculate(newState);
            return newState;
        case CHANGE_WEIGHT:
            let rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[action.index]['weight'] = action.weight;
            let newState = Object.assign({}, state, {rows: rowsTmp});
            newState = calculate(newState);
            return newState;
        case CHANGE_COST:
            let rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[action.index]['cost'] = action.cost;
            let newState = Object.assign({}, state, {rows: rowsTmp});
            newState = calculate(newState);
            return newState;
        case RESET_RECEIPT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

module.exports = moneyReceiptReducer;