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

import {MAX_TOTAL_REAL_PRICE} from '../constants/counters';

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
        let offsetPrice = this.props.totalRealPrice - this.props.totalPrice;
        let offsetLabel = "Thừa/thiếu";
        if (offsetPrice > 0) {
            offsetLabel = "Thiếu";
        } else if (offsetPrice < 0) {
            offsetLabel = "Thừa";
        }
        let offsetAbs = offsetPrice ? Math.abs(offsetPrice) : '';
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
                                    }}><span className="sum-label">Nhập tiền cần tính</span></TableRowColumn>
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
                                        className='sum-label'
                                        max={MAX_TOTAL_REAL_PRICE}
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
                                    }}><span className="sum-label">Số tiền tính ra</span></TableRowColumn>
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
                                        className='sum-label'
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
                                    }}><span className="sum-label">{offsetLabel}</span></TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>
                                    <MoneyNumberInput
                                        value={offsetAbs}
                                        readonly
                                        className='sum-label'
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