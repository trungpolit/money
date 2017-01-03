const initialState = {
    rows: {
        500: {
            count: null,
            totalPrice: null
        },
        200: {
            count: null,
            totalPrice: null
        },
        100: {
            count: null,
            totalPrice: null
        },
        50: {
            count: null,
            totalPrice: null
        },
        20: {
            count: null,
            totalPrice: null
        },
        10: {
            count: null,
            totalPrice: null
        },
        5: {
            count: null,
            totalPrice: null
        },
        2: {
            count: null,
            totalPrice: null
        },
        1: {
            count: null,
            totalPrice: null
        }
    }
};
const moneyCounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COUNT':
            let rowsTmp = JSON.parse(JSON.stringify(state.rows[action.index]));
            rowsTmp.count = action.count;
            rowsTmp.totalPrice = parseInt(action.count) * parseInt(action.index);
            return Object.assign({}, state, {rows: rowsTmp});
        case 'RESET_COUNT':
            return Object.assign({}, initialState);
        default:
            return state;
    }
};

module.exports = moneyCounterReducer;