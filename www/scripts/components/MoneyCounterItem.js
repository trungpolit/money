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

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
                        className='counter'
                        type='number'
                        value={this
                        .props
                        .label
                        .toString()}
                        readonly
                        modifier='underbar'/>
                </TableRowColumn>
                <TableRowColumn
                    style={{
                    width: '25%',
                    height: '30px',
                    margin: 0,
                    paddingRight: '6px',
                    paddingLeft: '6px'
                }}>
                    <Input
                        className='counter'
                        type='number'
                        value={this
                        .props
                        .count
                        .toString()}
                        onChange={(e) => this.props.onCountChange(e.target.value, this.props.index)}
                        modifier='underbar'
                        float/>
                </TableRowColumn>
                <TableRowColumn
                    style={{
                    width: '50%',
                    height: '30px',
                    margin: 0,
                    paddingRight: '6px',
                    paddingLeft: '6px'
                }}>
                    <Input
                        type='number'
                        className='text-right counter'
                        value={this
                        .props
                        .totalPrice
                        .toString()}
                        readonly
                        modifier='underbar'/>
                </TableRowColumn>
            </TableRow>
        );
    }
}

module.exports = MoneyCounterItem;