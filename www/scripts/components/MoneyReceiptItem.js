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
class MoneyReceiptItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = this.props.rowNumber % 2 === 0 ? {
                paddingLeft: "6px",
                paddingRight: "6px",
                backgroundColor: "#FFFFE0"
            } : {paddingLeft: "6px", paddingRight: "6px"};
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
                </TableRowColumn>
            </TableRow>
        );
    }
}

module.exports = MoneyReceiptItem;