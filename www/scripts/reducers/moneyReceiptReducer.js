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
    let taxPct = parseFloat((parseInt(state.taxPct) / 100).toFixed(2));
    for (let index = 0; index < state.rows.length; index++) {
        let element = state.rows[index];
        if (!element.weight || !element.cost) {
            continue;
        }
        element.totalTax = parseFloat((parseInt(element.cost) * parseInt(element.weight) * taxPct).toFixed(2));
        totalTax += element.totalTax;

        element.totalPrice = parseInt(element.cost) * parseInt(element.weight);
        totalPrice += element.totalPrice;

        element.costNoVat = parseFloat((parseInt(element.cost) - parseInt(element.cost) * taxPct).toFixed(2));
        element.totalPriceNoVat = element.costNoVat * parseInt(element.weight);
        totalPriceNoVat += element.totalPriceNoVat;

        state.rows[index] = element;
    }
    state.totalPriceNoVat = parseFloat(totalPriceNoVat.toFixed(2));
    state.totalTax = parseFloat(totalTax.toFixed(2));
    state.totalPrice = parseFloat(totalPrice.toFixed(2));
    return state;
};
import {CHANGE_TAX_PCT, CHANGE_COST, CHANGE_WEIGHT, RESET_RECEIPT} from '../constants/actionTypes';
const moneyReceiptReducer = (state = initialState, action) => {
    let newState;
    let rowsTmp;
    switch (action.type) {
        case CHANGE_TAX_PCT:
            newState = calculate(Object.assign({}, state, {
                taxPct: parseInt(action.pct)
            }));
            return newState;
        case CHANGE_WEIGHT:
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[action.index]['weight'] = parseInt(action.weight);
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        case CHANGE_COST:
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[action.index]['cost'] = parseInt(action.cost);
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        case RESET_RECEIPT:
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

module.exports = moneyReceiptReducer;