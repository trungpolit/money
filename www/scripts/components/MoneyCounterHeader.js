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

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class MoneyCounterHeader extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <TableHeader
                displayRowCheckbox={false}
                displaySelectAll={false}
                adjustForCheckbox={false}>
                <TableRow>
                    <TableRowColumn>Số tiền cần có</TableRowColumn>
                    <TableRowColumn>
                        <Input
                            type='number'
                            value={this
                            .props
                            .totalRealPrice
                            .toString()}
                            onChange={(e) => this.props.onRealChange(e.target.value)}
                            modifier='underbar'
                            float/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Số tiền tính ra</TableRowColumn>
                    <TableRowColumn>
                        <Input
                            type='number'
                            value={this
                            .props
                            .totalPrice
                            .toString()}
                            readonly
                            modifier='underbar'
                            float/>
                    </TableRowColumn>
                </TableRow>
                <TableRow>
                    <TableRowColumn>Chênh lệch</TableRowColumn>
                    <TableRowColumn>
                        <Input
                            type='number'
                            value={(this.props.totalRealPrice - this.props.totalPrice).toString()}
                            readonly
                            modifier='underbar'
                            float/>
                    </TableRowColumn>
                </TableRow>
            </TableHeader>
        );
    }
}

module.exports = MoneyCounterHeader;