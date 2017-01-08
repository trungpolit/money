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

class MoneyCounterHeader extends React.Component {
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
                        <strong>Nhập số tiền (tờ)</strong>
                    </Col>
                    <Col
                        style={{
                        'textAlign': 'center'
                    }}>
                       <strong>Thành tiền (đồng)</strong>
                    </Col>
                </Row>
            </section>
        );
    }
}

module.exports = MoneyCounterHeader;