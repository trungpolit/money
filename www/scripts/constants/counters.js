export const RATIO = 1000;
export const COUNTER_AUTOSAVE = 'counter_autosave';
export const INITIAL_STATE = {
    rows: [
        {
            label: 500,
            count: '',
            totalPrice: '',
        }, {
            label: 200,
            count: '',
            totalPrice: '',
        }, {
            label: 100,
            count: '',
            totalPrice: '',
        }, {
            label: 50,
            count: '',
            totalPrice: '',
        }, {
            label: 20,
            count: '',
            totalPrice: '',
        }, {
            label: 10,
            count: '',
            totalPrice: '',
        }, {
            label: 5,
            count: '',
            totalPrice: '',
        }, {
            label: 2,
            count: '',
            totalPrice: '',
        }, {
            label: 1,
            count: '',
            totalPrice: '',
        }
    ],
    totalPrice: '',
    totalRealPrice: '',
    // Cách cờ trạng thái liên quan tới autoSave
    isAutoSaving: 0,
    lastAutoSaved: null,
    autoSaveStatus: 1,
    autoSaveErrors: null,
    isGettingAutoSave:0,
    lastGetAutoSaved: null,
    getAutoSaveStatus:1,
    getAutoSaveErrors:null,
};

export const MAX_TOTAL_REAL_PRICE = 888000000000;
export const MAX_COUNT = 1000000;