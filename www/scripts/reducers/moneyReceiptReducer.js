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
    console.log(state);
    // Nếu chưa có thông tin taxPct
    if (!state.taxPct) {
        return state;
    }
    let totalPriceNoVat = 0;
    let totalTax = 0;
    let totalPrice = 0;
    for (let index = 0; index < state.rows.length; index++) {
        let element = state.rows[index];
        if (!element.weight || !element.cost) {
            continue;
        }
        element.totalTax = parseInt(element.cost) * parseFloat(state.taxPct / 100);
        totalTax += element.totalTax;

        element.totalPrice = parseInt(element.cost) * parseInt(element.weight);
        totalPrice += element.totalPrice;

        element.costNoVat = parseInt(element.cost) - element.totalTax;
        element.totalPriceNoVat = element.costNoVat * parseInt(element.weight);
        totalPriceNoVat += element.totalPriceNoVat;

        state.rows[index] = element;
    }
    state.totalPriceNoVat = totalPriceNoVat;
    state.totalTax = totalTax;
    state.totalPrice = totalPrice;
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