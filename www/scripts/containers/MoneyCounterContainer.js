const mapStateToProps = (state) => {
    return {totalPrice: state.moneyCounterReducer.totalPrice, rows: state.moneyCounterReducer.rows, totalRealPrice: state.moneyCounterReducer.totalRealPrice};
};

import {changeCount, resetCount, changeReal, getLastAutoSave} from '../actions/actionCreators';
const mapDispatchToProps = (dispatch) => {
    return {
        onCountChange: (count, index) => {
            dispatch(changeCount(count, index));
        },
        onResetCountClick: () => {
            dispatch(resetCount());
        },
        onRealChange: (price) => {
            dispatch(changeReal(price));
        },
        onLastCountClick: () => {
            dispatch(getLastCount());
        },
        onAutoSaveClick: () => {
            dispatch(getLastAutoSave());
        },
    };
};

import {connect} from 'react-redux';
import MoneyCounter from '../components/MoneyCounter';
const MoneyCounterContainer = connect(mapStateToProps, mapDispatchToProps)(MoneyCounter);

export default MoneyCounterContainer;