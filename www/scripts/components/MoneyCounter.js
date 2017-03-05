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

import MoneyNumberInput from './MoneyNumberInput';
import MoneyCounterItem from './MoneyCounterItem';

import {INITIAL_STATE} from '../constants/counters';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import TaxSelectField from './TaxSelectField';
import VATSelectField from './VATSelectField';

class MoneyCounter extends React.Component {
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
        return (
            <Page
                renderToolbar={this
                    .renderToolbar
                    .bind(this, this.props)}>
                <MuiThemeProvider>
                    <Table fixedHeader={true} height='300px'>
                        <TableHeader
                            displayRowCheckbox={false}
                            displaySelectAll={false}
                            adjustForCheckbox={false}>
                            <TableRow
                                style={{
                                    height: '30px'
                                }}>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>Số tiền cần có</TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>
                                    <MoneyNumberInput
                                        value={this
                                            .props
                                            .totalRealPrice}
                                        onChange={(e) => {
                                            this.props.onRealChange(e.target.value);
                                        }}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={{
                                    height: '30px'
                                }}>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>Số tiền tính ra</TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>
                                    <MoneyNumberInput
                                        value={this
                                            .props
                                            .totalPrice}
                                        readonly
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow
                                style={{
                                    height: '30px'
                                }}>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>Số tiền chênh lệch</TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>
                                    <MoneyNumberInput
                                        value={(this.props.totalRealPrice - this.props.totalPrice)}
                                        readonly
                                    />
                                </TableRowColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {this
                                .props
                                .rows
                                .map((row, i) => {
                                    return <MoneyCounterItem
                                        onCountChange={this.props.onCountChange}
                                        key={i}
                                        index={i}
                                        label={INITIAL_STATE.rows[i].label}
                                        count={row.count}
                                        totalPrice={row.totalPrice}/>;
                                })}
                        </TableBody>
                    </Table>
                </MuiThemeProvider>
                <section style={{
                    'margin': '16px'
                }}>
                    <Row>
                        <Col>
                            <Button modifier='large' onClick={() => this.props.onResetCountClick()}>Làm lại</Button>
                        </Col>
                        <Col></Col>
                        <Col>
                            <Button modifier='large' onClick={() => this.props.onAutoSaveClick()}>Lịch sử</Button>
                        </Col>
                    </Row>
                </section>
            </Page>
        );
    }
}

module.exports = MoneyCounter;