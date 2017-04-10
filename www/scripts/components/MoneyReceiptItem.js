import React from 'react';

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

import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MoneyNumberInput from './MoneyNumberInput';

import { MAX_WEIGHT, MAX_COST } from '../constants/receipts';

const zenscroll = require('zenscroll');

const closest= function(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}

class MoneyReceiptItem extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let container = document.getElementsByClassName('ScrollContainer')[0];
        let myDiv = closest(container, 'div');

        let defaultDuration = 500;
        let edgeOffset = 30;
        let myScroller = zenscroll.createScroller(myDiv, defaultDuration, edgeOffset);
        let scrollHeight = myDiv.scrollHeight;
        myScroller.toY(scrollHeight);
    }

    render() {
        let style = this.props.rowNumber % 2 === 0 ? {
            paddingLeft: "6px",
            paddingRight: "6px",
            backgroundColor: "#e9e9e9"
        } : { paddingLeft: "6px", paddingRight: "6px", backgroundColor: "#c0c0c0" };
        return (
            <TableRow
                style={{
                    height: '30px',
                    margin: 0,
                    padding: 0
                }}
                striped={this.props.rowNumber % 2 === 1 ? true : false}
                hoverable={true}
                displayBorder={true}
            >
                <TableRowColumn style={style}>
                    <div id={'ScrollElement' + this.props.rowNumber}>
                        <Row style={{
                            marginTop: '5px',
                        }}>
                            <Col>
                                <span className="item-label">Nhập số lượng</span>
                            </Col>
                            <Col>
                                <span className="item-label">Nhập đơn giá</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MoneyNumberInput
                                    className='text-right counter'
                                    value={this
                                        .props
                                        .weight}
                                    id={'weight' + this.props.rowNumber}
                                    float
                                    floatType={true}
                                    onChange={(e) => this.props.onWeightChange(e.target.value, this.props.rowNumber)}
                                    max={MAX_WEIGHT}
                                />
                            </Col>
                            <Col>
                                <MoneyNumberInput
                                    className='text-right counter'
                                    value={this
                                        .props
                                        .cost}
                                    id={'cost' + this.props.rowNumber}
                                    float
                                    onChange={(e) => this.props.onCostChange(e.target.value, this.props.rowNumber)}
                                    max={MAX_COST}
                                />
                            </Col>
                        </Row>
                        <Row style={{
                            marginTop: '5px',
                        }}>
                            <Col>
                                <span className="item-label">Đơn giá chưa VAT</span>
                            </Col>
                            <Col>
                                <span className="item-label">Thành tiền chưa VAT</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MoneyNumberInput
                                    className='text-right counter'
                                    value={this
                                        .props
                                        .costNoVat}
                                    id={'costNoVat' + this.props.rowNumber}
                                    float
                                    readonly
                                />
                            </Col>
                            <Col>
                                <MoneyNumberInput
                                    className='text-right counter'
                                    value={this
                                        .props
                                        .totalPriceNoVat}
                                    id={'totalPrice' + this.props.rowNumber}
                                    float
                                    readonly
                                />
                            </Col>
                        </Row>
                    </div>
                </TableRowColumn>
            </TableRow>
        );
    }
}

module.exports = MoneyReceiptItem;