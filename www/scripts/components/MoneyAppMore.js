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

class MoneyAppMore extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = this
            .renderRow
            .bind(this);
    }

    renderToolbar() {
        return (
            <Toolbar>
                <div className='left'>
                    <BackButton>Trở lại</BackButton>
                </div>
                <div className='center'>Ứng dụng khác</div>
            </Toolbar>
        );
    }

    renderRow(row, index) {
        return (
            <ListItem
                key={index}
                tappable
                onClick={(e) => {
                    switch (device.platform){
                        case 'Android':
                            window.open(row.android_link, '_blank');
                            break;
                        case 'iOS':
                            window.open(row.ios_link, '_blank');
                            break;
                        default:
                            window.open(row.windowsphone_link, '_blank');
                    }
                }}
            >
                <div className='left'>
                    <img src={row.icon} className=''/>
                </div>
                <div className='center' style={{marginLeft: '10px'}}>
                    {row.name}
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
                            name: "Famion",
                            icon: "http://famion.vn/img/icon-57.png",
                            android_link: "https://play.google.com/store/apps/details?id=trungpolit.cordova.ongas",
                            ios_link: "https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1109371782&mt=8",
                            windowsphone_link: "https://www.microsoft.com/vi-vn/store/apps/ongas/9nblggh4nz21",
                        },
                    ]}
                    renderRow={this.renderRow}/>
            </Page>
        );
    }
}
;

module.exports = MoneyAppMore;