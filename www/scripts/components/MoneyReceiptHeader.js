import React from 'react';
import ReactDOM from 'react-dom';

import ons from 'onsenui';

import {
    Page,
    Toolbar,
    Row,
    Col,
    Input,
    Button
} from 'react-onsenui';

class MoneyReceiptHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section
                style={{
                'marginTop': '16px',
                'marginBottom': '16px'
            }}>
                <Row>
                    <Col
                        style={{
                        'textAlign': 'center'
                    }}>
                        <Button
                            style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '90%'
                        }}
                            className={(this.props.left.value === this.state.vat)
                            ? 'button-active'
                            : ''}
                            onClick={this
                            .handleClick
                            .bind(this, this.props.left.value)}>{this.props.left.label}</Button>
                    </Col>
                    <Col
                        style={{
                        'textAlign': 'center'
                    }}>
                        <Button
                            style={{
                            display: 'block',
                            margin: '0 auto',
                            width: '90%'
                        }}
                            className={(this.props.right.value === this.state.vat)
                            ? 'button-active'
                            : ''}
                            onClick={() => this.props.onTaxPctChange(this.props.right.value)}>{this.props.right.label}</Button>
                    </Col>
                </Row>
            </section>
        );
    }
}

module.exports = MoneyReceiptHeader;