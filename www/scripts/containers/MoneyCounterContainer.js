const mapStateToProps = (state) => {
    return {totalPrice: state.moneyCounterReducer.totalPrice, rows: state.moneyCounterReducer.rows};
};

import {changeCount, resetCount} from '../actions/actionCreators';
const mapDispatchToProps = (dispatch) => {
    return {
        onCountChange: (count, index) => {
            dispatch(changeCount(count, index));
        },
        onResetCountClick: () => {
            dispatch(resetCount());
        }
    };
};

import {connect} from 'react-redux';
import MoneyCounter from '../components/MoneyCounter';
const MoneyCounterContainer = connect(mapStateToProps, mapDispatchToProps)(MoneyCounter);

export default MoneyCounterContainer;