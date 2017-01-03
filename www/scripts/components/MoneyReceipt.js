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

import MoneyReceiptHeader from './MoneyReceiptHeader';
import MoneyReceiptItem from './MoneyReceiptItem';
import MoneyReceiptFooter from './MoneyReceiptFooter';

class MoneyReceipt extends React.Component {
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
        const left = {
            value: 10,
            label: "Thuế suất 10%"
        };
        const right = {
            value: 5,
            label: "Thuế suất 5%"
        };
        return (
            <Page
                renderToolbar={this
                .renderToolbar
                .bind(this, this.props)}>
                <MoneyReceiptHeader
                    left={left}
                    right={right}
                    onTaxPctChange={this.props.onTaxPctChange}/>
                <List>
                    <ListItem>
                        <Row>
                            <Col>
                                <strong>Nhập khối lượng</strong>
                            </Col>
                            <Col>
                                <strong>Nhập giá gồm VAT</strong>
                            </Col>
                        </Row>
                    </ListItem>
                    {this
                        .props
                        .rows
                        .map(function (row, i) {
                            return <MoneyReceiptItem
                                onWeightChange={this.props.onWeightChange}
                                onCostChange={this.props.onCostChange}
                                index={i}
                                weight={row.weight}
                                cost={row.cost}/>;
                        })}
                </List>
                <section style={{
                    'margin': '16px'
                }}>
                    <Button modifier='large'>Làm lại</Button>
                </section>
            </Page>
        );
    }
}

module.exports = MoneyReceipt;