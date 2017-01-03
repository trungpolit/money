import {CHANGE_TAX_PCT, CHANGE_COST, CHANGE_WEIGHT, RESET_RECEIPT} from '../constants/actionTypes';

export function changeTaxPct(pct) {
    return {type: CHANGE_TAX_PCT, pct: pct};
}

export function changeCost(cost, index) {
    return {type: CHANGE_COST, cost: cost, index: index};
}

export function changeWeight(weight, index) {
    return {type: CHANGE_WEIGHT, weight: weight, index: index};
}

export function resetReceipt() {
    return {type: RESET_RECEIPT};
}