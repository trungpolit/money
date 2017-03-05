import {CHANGE_COUNT, RESET_COUNT, CHANGE_REAL} from '../constants/actionTypes';
import {COUNTER_AUTOSAVE} from '../constants/counters';
import {startAutoSave, finishAutoSave, failAutoSave} from '../actions/actionCreators';
const localForage = require("localforage");
const autoSave = store => next => action => {
    if (action.type === CHANGE_COUNT || action.type === CHANGE_REAL) {
        console.log('Bắt đầu thực hiện lưu autosave được gây ra từ action %s', action.type);
        // Thực hiện đánh dấu bắt đầu thực hiện autoSave
        store.dispatch(startAutoSave());
        // Thực hiện lưu lại state của counter
        localForage.setItem(COUNTER_AUTOSAVE, store.getState()['moneyCounterReducer']).then(function () {
            // Thực hiện đánh dấu là đã lưu autosave thành công
            let d = new Date();
            let lastAutoSaved = d.getTime();
            store.dispatch(finishAutoSave(lastAutoSaved));
            return localForage.getItem(COUNTER_AUTOSAVE);
        }).then(function (value) {
            console.log('Thực hiện lưu thành công trạng thái của nhánh moneyCounterReducer vào %s', COUNTER_AUTOSAVE);
            console.log('Giá trị đã lưu:');
            console.log(value);
        }).catch(function (err) {
            console.log('Thực hiện lưu lỗi trạng thái nhánh moneyCounterReducer vào %s', COUNTER_AUTOSAVE);
            // Thực hiện đánh dấu lưu autosave lỗi
            let d = new Date();
            let lastAutoSaved = d.getTime();
            store.dispatch(failAutoSave(lastAutoSaved, err));
        });
    }
    next(action);
};

export default autoSave;
