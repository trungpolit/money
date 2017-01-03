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

class MoneyReceiptItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ListItem modifier='nopadding'>
                <Row>
                    <Col
                        style={{
                        borderRight: '1px solid'
                    }}>
                        <Input
                            type='number'
                            value={this.props.weight}
                            onChange={(e) => this.props.onWeightChange(e.target.value, this.props.index)}
                            modifier='underbar'
                            float/>
                    </Col>
                    <Col >
                        <Input
                            type='number'
                            value={this.props.cost}
                            onChange={(e) => this.props.onCostChange(e.target.value, this.props.index)}
                            modifier='underbar'
                            float/>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{
                        borderRight: '1px solid'
                    }}>
                        <div className='text-right'>
                            <span >{this.props.weight * this.props.cost}</span>
                        </div>
                    </Col>
                    <Col >
                        <div className='text-right'>
                            <span >{this.props.cost}</span>
                        </div>
                    </Col>
                </Row>
            </ListItem>
        );
    }
}

module.exports = MoneyReceiptItem;