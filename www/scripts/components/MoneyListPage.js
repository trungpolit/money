import React from 'react';
import {Page, Toolbar, List, ListHeader, ListItem} from 'react-onsenui';

import MoneyReceiptContainer from '../containers/MoneyReceiptContainer';
import MoneyCounterContainer from '../containers/MoneyCounterContainer';
import MoneyAppMore from '../components/MoneyAppMore';

class MoneyListPage extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this
            .renderRow
            .bind(this);
        this.gotoComponent = this
            .gotoComponent
            .bind(this);
    }

    gotoComponent(component, props) {
        this
            .props
            .navigator
            .pushPage({comp: component, props: props});
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='center'>Công Cụ</div>
            </Toolbar>
        );
    }

    renderRow(row, index) {
        return (
            <ListItem
                key={index}
                tappable
                onClick={() => this.gotoComponent(row.comp, row.props)}>
                <div className='center'>
                    {row.label}
                </div>
            </ListItem>
        );
    }

    render() {
        return (
            <Page renderToolbar={this.renderToolbar}>
                <List
                    dataSource={[
                        {
                            comp: MoneyReceiptContainer,
                            label: "Tính hóa đơn",
                            props: {
                                key: "MoneyReceiptContainer",
                                label: "Tính Hóa Đơn"
                            }
                        }, {
                            comp: MoneyCounterContainer,
                            label: "Tính tiền hàng",
                            props: {
                                key: "MoneyCounterContainer",
                                label: "Tính Tiền Hàng"
                            }
                        }, {
                            comp: MoneyAppMore,
                            label: "Ứng dụng khác",
                            props: {
                                key: "MoneyAppMore",
                                label: "Ứng dụng khác"
                            }
                        }
                    ]}
                    renderRow={this.renderRow}/>
            </Page>
        );
    }
}
;

module.exports = MoneyListPage;