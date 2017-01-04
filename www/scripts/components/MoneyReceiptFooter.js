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

class MoneyReceiptFooter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section>
                <ListItem>
                    <Row>
                        <Col>
                            <strong>Tiền hàng</strong>
                        </Col>
                        <Col>{this.props.totalPriceNoVat}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Tiền thuế</strong>
                        </Col>
                        <Col>{this.props.totalTax}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <strong>Tổng tiền thuế</strong>
                        </Col>
                        <Col>{this.props.totalPrice}</Col>
                    </Row>
                </ListItem>
            </section>
        );
    }
}

module.exports = MoneyReceiptFooter;