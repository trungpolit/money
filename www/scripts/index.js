import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import React from 'react';
import ReactDOM from 'react-dom';
import ons from 'onsenui';
import {Page, Toolbar, Button} from 'react-onsenui';
import {Provider} from 'react-redux';

import MoneyNavigator from './components/MoneyNavigator';
import MoneyListPage from './components/MoneyListPage';

import {createStore} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import indexReducer from './reducers/indexReducer';
// let store = createStore(indexReducer, devToolsEnhancer({realtime: true}));
let store = createStore(indexReducer);

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        ReactDOM.render(
            <Provider store={store}>
            <MoneyNavigator/>
        </Provider>, document.getElementById('app'));
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
})();