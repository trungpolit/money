import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
    Page,
    Toolbar,
    Row,
    Col,
    Input,
    Button,
    ListItem
} from 'react-onsenui';

class MoneyCounterItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Row>
                <Col style={{
                    borderRight: '1px solid'
                }}>
                    <Row>
                        <Col
                            width='30%'
                            style={{
                            borderRight: '1px solid'
                        }}>
                            <Input
                                className='counter'
                                type='number'
                                value={this
                                .props
                                .label
                                .toString()}
                                readonly
                                modifier='underbar'/>
                        </Col>
                        <Col>
                            <Input
                                className='counter'
                                type='number'
                                value={this
                                .props
                                .count
                                .toString()}
                                onChange={(e) => this.props.onCountChange(e.target.value, this.props.index)}
                                modifier='underbar'
                                float/>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Input
                        type='number'
                        className='text-right counter'
                        value={this
                        .props
                        .totalPrice
                        .toString()}
                        readonly
                        modifier='underbar'/>

                </Col>
            </Row>
        );
    }
}

module.exports = MoneyCounterItem;