const mapStateToProps = (state) => {
    return {taxPct: state.moneyReceiptReducer.taxPct, rows: state.moneyReceiptReducer.rows, totalPriceNoVat: state.moneyReceiptReducer.totalPriceNoVat, totalTax: state.moneyReceiptReducer.totalTax, totalPrice: state.moneyReceiptReducer.totalPrice};
};

import {changeWeight, changeCost, changeTaxPct, resetReceipt} from '../actions/actionCreators';
const mapDispatchToProps = (dispatch) => {
    return {
        onWeightChange: (weight, index) => {
            dispatch(changeWeight(weight, index));
        },
        onCostChange: (cost, index) => {
            dispatch(changeCost(cost, index));
        },
        onTaxPctChange: (pct) => {
            dispatch(changeTaxPct(pct));
        },
        onResetReceiptClick: () => {
            dispatch(resetReceipt());
        }
    };
};

import {connect} from 'react-redux';
import MoneyReceipt from '../components/MoneyReceipt';
const MoneyReceiptContainer = connect(mapStateToProps, mapDispatchToProps)(MoneyReceipt);

export default MoneyReceiptContainer;