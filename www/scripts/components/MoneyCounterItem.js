import React from 'react';

import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MoneyNumberInput from './MoneyNumberInput';
import { Input } from 'react-onsenui';

import {MAX_COUNT} from '../constants/counters';

class MoneyCounterItem extends React.Component {
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
                }}>
                <TableRowColumn
                    style={{
                        width: '25%',
                        height: '30px',
                        margin: 0,
                        paddingRight: '6px',
                        paddingLeft: '6px'
                    }}>
                    <Input
                        value={'Loại '+this.props.label}
                        input-id={'label' + this.props.key}
                        readonly
                        className="value-label"
                        modifier='underbar'
                    />
                </TableRowColumn>
                <TableRowColumn
                    style={{
                        width: '25%',
                        height: '30px',
                        margin: 0,
                        paddingRight: '6px',
                        paddingLeft: '6px'
                    }}>
                    <MoneyNumberInput
                        className='counter'
                        value={this
                            .props
                            .count}
                        input-id={'counter' + this.props.key}
                        onChange={(e) => this.props.onCountChange(e.target.value, this.props.index)}
                        max={MAX_COUNT}
                    />
                </TableRowColumn>
                <TableRowColumn
                    style={{
                        width: '50%',
                        height: '30px',
                        margin: 0,
                        paddingRight: '6px',
                        paddingLeft: '6px'
                    }}>
                    <MoneyNumberInput
                        className='text-right counter'
                        value={this
                            .props
                            .totalPrice}
                        input-id={'totalPrice' + this.props.key}
                        readonly
                    />
                </TableRowColumn>
            </TableRow>
        );
    }
}

module.exports = MoneyCounterItem;