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
                <TableRowColumn>
                    <Row style={{
                        marginTop: '5px',
                    }}>
                        <Col>
                            Số lượng
                        </Col>
                        <Col>
                            Đơn giá
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MoneyNumberInput
                                placehoder="Số lượng"
                                className='text-right counter'
                                value={this
                                    .props
                                    .weight}
                                id={'weight' + this.props.rowNumber}
                                float
                                onChange={(e) => this.props.onWeightChange(e.target.value, this.props.rowNumber)}
                            />
                        </Col>
                        <Col>
                            <MoneyNumberInput
                                placehoder="Đơn giá"
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
                            KQ giá chưa VAT
                        </Col>
                        <Col>
                            Thành tiền
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <MoneyNumberInput
                                placehoder="KQ giá chưa VAT"
                                className='text-right counter'
                                value={this
                                    .props
                                    .totalPriceNoVat}
                                id={'costNoVat' + this.props.rowNumber}
                                float
                                readonly
                            />
                        </Col>
                        <Col>
                            <MoneyNumberInput
                                placehoder="Thành tiền"
                                className='text-right counter'
                                value={this
                                    .props
                                    .totalPrice}
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