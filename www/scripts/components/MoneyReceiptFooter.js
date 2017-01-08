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
                            <div className='text-right'>
                                <strong>Tiền hàng</strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-right'>
                                {this.props.totalPriceNoVat}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='text-right'>
                                <strong>Tiền thuế</strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-right'>
                                {this.props.totalTax}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className='text-right'>
                                <strong>Tổng tiền thuế</strong>
                            </div>
                        </Col>
                        <Col>
                            <div className='text-right'>
                                {this.props.totalPrice}
                            </div>
                        </Col>
                    </Row>
                </ListItem>
            </section>
        );
    }
}

module.exports = MoneyReceiptFooter;