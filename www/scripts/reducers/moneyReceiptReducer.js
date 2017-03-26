import {VAT_TYPE, TAX_PCT} from '../constants/receipts';
const numeral = require('numeral');
const initialState = {
    taxPct: TAX_PCT[0]['value'],
    vatType: VAT_TYPE[0]['value'],
    rows: [
        {
            weight: '',
            cost: '',
            totalPrice: '',
            costNoVat: '',
            totalPriceNoVat: '',
            totalTax: ''
        }, {
            weight: '',
            cost: '',
            totalPrice: '',
            costNoVat: '',
            totalPriceNoVat: '',
            totalTax: ''
        }, {
            weight: '',
            cost: '',
            totalPrice: '',
            costNoVat: '',
            totalPriceNoVat: '',
            totalTax: ''
        }
    ],
    totalPriceNoVat: 0,
    totalTax: 0,
    totalPrice: 0
};
const calculate = function (state) {
    let totalPriceNoVat = 0;
    let totalTax = 0;
    let totalPrice = 0;
    let taxPct = parseFloat((parseInt(state.taxPct) / 100).toFixed(2));
    let cost;
    let weight;
    // Nếu giá nhập đã có VAT
    if (state.vatType === 'VAT') {
        for (let index = 0; index < state.rows.length; index++) {
            let element = state.rows[index];
            cost = numeral(element.cost).value();
            weight = numeral(element.weight).value();
            element.totalTax = parseFloat((cost * weight * taxPct).toFixed(2));
            totalTax += element.totalTax;

            element.totalPrice = cost * weight;
            totalPrice += element.totalPrice;

            element.costNoVat = parseFloat((cost - cost * taxPct).toFixed(2));
            element.totalPriceNoVat = element.costNoVat * weight;
            totalPriceNoVat += element.totalPriceNoVat;

            state.rows[index] = element;
        }
    }
    // Nếu giá nhập chưa có VAT
    else {
        for (let index = 0; index < state.rows.length; index++) {
            let element = state.rows[index];
            cost = numeral(element.cost).value();
            let realCost = parseFloat((cost + cost * taxPct).toFixed(2));
            weight = numeral(element.weight).value();
            element.totalTax = parseFloat((cost * weight * taxPct).toFixed(2));
            totalTax += element.totalTax;

            element.totalPrice = realCost * weight;
            totalPrice += element.totalPrice;

            element.costNoVat = cost;
            element.totalPriceNoVat = element.costNoVat * weight;
            totalPriceNoVat += element.totalPriceNoVat;

            state.rows[index] = element;
        }
    }

    state.totalPriceNoVat = parseFloat(totalPriceNoVat.toFixed(2));
    state.totalTax = parseFloat(totalTax.toFixed(2));
    state.totalPrice = parseFloat(totalPrice.toFixed(2));
    return state;
};
import {
    CHANGE_TAX_PCT,
    CHANGE_COST,
    CHANGE_WEIGHT,
    RESET_RECEIPT,
    ADD_ITEM,
    CHANGE_VAT_TYPE
} from '../constants/actionTypes';
const moneyReceiptReducer = (state = initialState, action) => {
    let newState;
    let rowsTmp;
    switch (action.type) {
        case CHANGE_TAX_PCT:
            newState = calculate(Object.assign({}, state, {
                taxPct: parseInt(action.pct)
            }));
            return newState;
        case CHANGE_VAT_TYPE:
            newState = calculate(Object.assign({}, state, {
                vatType: action.value
            }));
            return newState;
        case CHANGE_WEIGHT:
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            // rowsTmp[action.index]['weight'] = numeral(action.weight).value();
            rowsTmp[action.index]['weight'] = action.weight;
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        case CHANGE_COST:
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp[action.index]['cost'] = numeral(action.cost).value();
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        case RESET_RECEIPT:
            return Object.assign({}, initialState);
        case ADD_ITEM:
            rowsTmp = JSON.parse(JSON.stringify(state.rows));
            rowsTmp.push({
                weight: '',
                cost: '',
                totalPrice: '',
                costNoVat: '',
                totalPriceNoVat: '',
                totalTax: '',
            });
            newState = calculate(Object.assign({}, state, {rows: rowsTmp}));
            return newState;
        default:
            return state;
    }
};

module.exports = moneyReceiptReducer;