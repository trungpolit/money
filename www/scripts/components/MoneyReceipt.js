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
    Button,
    Fab,
    Icon,
    ToolbarButton,
} from 'react-onsenui';

import {
    Table,
    TableBody,
    TableHeader,
    TableFooter,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MoneyReceiptItem from './MoneyReceiptItem';
import TaxSelectField from './TaxSelectField';
import VATSelectField from './VATSelectField';
import MoneyNumberInput from './MoneyNumberInput';

class MoneyReceipt extends React.Component {
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
                <div className='right'>
                    <ToolbarButton onClick={(e) => this.props.onAddItemClick()}>
                        <Button modifier='large' style={{backgroundColor: "#1284ff"}}>
                            <Icon icon='md-plus' size={26} style={{marginTop: "8px"}}/>
                        </Button>
                    </ToolbarButton>
                </div>
            </Toolbar>
        );
    }

    renderFixed() {
        return (
            <Fab position='bottom right'>
                <Icon icon='md-face'/>
            </Fab>
        );
    }

    render() {

        return (
            <Page
                renderToolbar={this
                    .renderToolbar
                    .bind(this, this.props)}
            >
                <MuiThemeProvider>
                    <Table fixedHeader={true} fixedFooter={true} height='300px' showRowHover={true} stripedRows={true}>
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
                                    }}>
                                    <VATSelectField {...this.props}
                                                    value={this.props.vatType}
                                                    onChange={(event, index, value) => this.props.onVatTypeChange(value)}/>
                                </TableRowColumn>
                                <TableRowColumn
                                    style={{
                                        height: '30px',
                                        margin: 0,
                                        paddingRight: '12px',
                                        paddingLeft: '6px'
                                    }}>
                                    <TaxSelectField {...this.props}
                                                    value={this.props.taxPct}
                                                    onChange={(event, index, value) => this.props.onTaxPctChange(value)}/>
                                </TableRowColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false} showRowHover={true} stripedRows={true}
                                   displayBorder={true}>
                            {this
                                .props
                                .rows
                                .map((row, i) => {
                                    return <MoneyReceiptItem
                                        onWeightChange={this.props.onWeightChange}
                                        onCostChange={this.props.onCostChange}
                                        weight={row.weight}
                                        cost={row.cost}
                                        totalPrice={row.totalPrice}
                                        costNoVat={row.costNoVat}
                                        totalPriceNoVat={row.totalPriceNoVat}
                                        totalTax={row.totalTax}
                                        key={i}
                                        index={i}
                                    />;
                                })}
                        </TableBody>
                        <TableFooter adjustForCheckbox={false}>
                            <TableRow>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <span className="sum-label">Tiền hàng</span>
                                </TableRowColumn>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <MoneyNumberInput
                                        className='text-right counter'
                                        value={this.props.totalPriceNoVat ? this.props.totalPriceNoVat : 0}
                                        readonly
                                        zeroAllow={true}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <span
                                        className="sum-label">Tiền thuế {this.props.taxPct ? this.props.taxPct : 0}%</span>
                                </TableRowColumn>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <MoneyNumberInput
                                        className='text-right counter'
                                        value={this.props.totalTax ? this.props.totalTax : 0}
                                        readonly
                                        zeroAllow={true}
                                    />
                                </TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <span className="sum-label">Tổng tiền hàng</span>
                                </TableRowColumn>
                                <TableRowColumn style={{paddingLeft: "6px", paddingRight: "6px"}}>
                                    <MoneyNumberInput
                                        className='text-right counter'
                                        value={this.props.totalPrice ? this.props.totalPrice : 0}
                                        readonly
                                        zeroAllow={true}
                                    />
                                </TableRowColumn>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </MuiThemeProvider>
            </Page>
        );
    }
}

module.exports = MoneyReceipt;