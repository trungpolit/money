import {
    CHANGE_TAX_PCT,
    CHANGE_VAT_TYPE,
    CHANGE_COST,
    CHANGE_WEIGHT,
    ADD_ITEM,
    RESET_RECEIPT,
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

import {
    COUNTER_AUTOSAVE, MAX_TOTAL_REAL_PRICE, MAX_COUNT
} from '../constants/counters';

import { MAX_WEIGHT, MAX_COST } from '../constants/receipts';

const localForage = require("localforage");
const numeral = require('numeral');

// ******************** Xử lý dành cho Receipt ********************
export function changeTaxPct(pct) {
    return {type: CHANGE_TAX_PCT, pct: pct};
}

export function changeVatType(value) {
    return {type: CHANGE_VAT_TYPE, value: value};
}

export function changeCost(cost, index) {
    let prettyCost = Math.abs(numeral(cost).value());
    if (prettyCost > MAX_COST) {
        prettyCost = MAX_COST;
    }
    return { type: CHANGE_COST, cost: prettyCost, index: index};
}

export function changeWeight(weight, index) {
    if (typeof weight === 'string' && (weight.match(/\.$/) || weight.match(/\.0$/) )) {

    } else {
        weight = Math.abs(numeral(weight).value());
    }
    let prettyWeight = Math.abs(numeral(weight).value());
    if (prettyWeight > MAX_WEIGHT) {
        weight = MAX_WEIGHT;
    }
    return { type: CHANGE_WEIGHT, weight: weight ? weight:'', index: index };
}

export function addItem() {
    return {type: ADD_ITEM};
}

export function resetReceipt() {
    return {type: RESET_RECEIPT};
}

// ******************** Xử lý dành cho Counter ********************
export function changeCount(count, index) {
    let prettyCount = Math.abs(numeral(count).value());
    if (prettyCount > MAX_COUNT) {
        prettyCount = MAX_COUNT;
    }
    return { type: CHANGE_COUNT, count: prettyCount, index: index};
}

export function resetCount() {
    return {type: RESET_COUNT};
}

export function changeReal(price) {
    let prettyPrice = Math.abs(numeral(price).value());
    if (prettyPrice > MAX_TOTAL_REAL_PRICE) {
        prettyPrice = MAX_TOTAL_REAL_PRICE;
    }
    return { type: CHANGE_REAL, price: prettyPrice};
}

export function startAutoSave() {
    return {type: START_AUTOSAVE};
}

export function finishAutoSave(lastAutoSaved) {
    return {type: FINISH_AUTOSAVE, lastAutoSaved: lastAutoSaved};
}

export function failAutoSave(lastAutoSaved, errors) {
    return {type: FAIL_AUTOSAVE, lastAutoSaved: lastAutoSaved, errors: errors};
}

export function startGetAutoSave() {
    return {type: START_GET_AUTOSAVE};
}

export function finishGetAutoSave(lastGetAutoSaved, rows, totalPrice, totalRealPrice) {
    return {
        type: FINISH_GET_AUTOSAVE,
        lastGetAutoSaved: lastGetAutoSaved,
        rows: rows,
        totalPrice: totalPrice,
        totalRealPrice: totalRealPrice
    };
}

export function failGetAutoSave(lastGetAutoSaved, errors) {
    return {type: FAIL_GET_AUTOSAVE, lastGetAutoSaved: lastGetAutoSaved, errors: errors};
}

export function getLastAutoSave() {
    return function (dispatch) {
        dispatch(startGetAutoSave());
        localForage.getItem(COUNTER_AUTOSAVE).then(function (value) {
            if (!value) {
                console.log('Dữ liệu chưa từng được lưu trước đó');
                return;
            }
            console.log('Dữ liệu được lấy ra thành công từ %s', COUNTER_AUTOSAVE);
            console.log('Giá trị:');
            console.log(value);
            let d = new Date();
            let lastGetAutoSaved = d.getTime();
            dispatch(finishGetAutoSave(lastGetAutoSaved, value.rows, value.totalPrice, value.totalRealPrice));
        }).catch(function (err) {
            console.log('Dữ liệu được lấy ra lỗi từ %s', COUNTER_AUTOSAVE);
            let d = new Date();
            let lastGetAutoSaved = d.getTime();
            dispatch(failGetAutoSave(lastGetAutoSaved, err));
        });
    }
}