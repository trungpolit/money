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

class MoneyCounterFooter extends React.Component {
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
                                <strong>Tổng tiền</strong>
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

module.exports = MoneyCounterFooter;