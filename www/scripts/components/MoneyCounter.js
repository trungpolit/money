import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
    Page,
    Toolbar,
    Row,
    Col,
    Input,
    BackButton,
    List,
    ListHeader,
    ListItem,
    Button
} from 'react-onsenui';

import MoneyCounterHeader from './MoneyCounterHeader';
import MoneyCounterItem from './MoneyCounterItem';
import MoneyCounterFooter from './MoneyCounterFooter';

import {INITIAL_STATE} from '../constants/counters';

class MoneyCounter extends React.Component {
    constructor(props) {
        super(props);
    }

    renderToolbar(props) {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton>Trở lại</BackButton>
                </div>
                <div className='center'>{props.label}</div>
            </Toolbar>
        );
    }

    render() {
        return (
            <Page
                renderToolbar={this
                .renderToolbar
                .bind(this, this.props)}>
                <MoneyCounterHeader/> {this
                    .props
                    .rows
                    .map((row, i) => {
                        return <MoneyCounterItem
                            onCountChange={this.props.onCountChange}
                            key={i}
                            index={i}
                            label={INITIAL_STATE.rows[i].label}
                            count={row.count}
                            totalPrice={row.totalPrice}/>;
                    })}
                <MoneyCounterFooter totalPrice={this.props.totalPrice}/>
                <section style={{
                    'margin': '16px'
                }}>
                    <Button modifier='large' onClick={() => this.props.onResetCountClick()}>Làm lại</Button>
                </section>
            </Page>
        );
    }
}

module.exports = MoneyCounter;