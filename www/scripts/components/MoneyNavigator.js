import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {Page, Navigator} from 'react-onsenui';
import MoneyListPage from './MoneyListPage';

class MoneyNavigator extends React.Component {
    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;
        return React.createElement(route.comp, route.props);
    }
    render() {
        return (<Navigator
            animation='slide'
            initialRoute={{
            comp: MoneyListPage,
            props: {
                key: "MoneyHome"
            }
        }}
            renderPage={this.renderPage}/>);
    }
}

module.exports = MoneyNavigator;