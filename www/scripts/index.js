// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704 To debug code on page load in
// Ripple or on Android devices/emulators: launch your app, set breakpoints, and
// then run "window.location.reload()" in the JavaScript Console.
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
let store = createStore(indexReducer, devToolsEnhancer());

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