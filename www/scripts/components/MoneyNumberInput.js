import React from 'react';
import {Input} from 'react-onsenui';
const numeral = require('numeral');

class MoneyNumberInput extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.zeroAllow) {
            this.state = {
                value: this.props.value ? numeral(this.props.value).format('0,0[.]00') : 0,
            };
        } else {
            this.state = {
                value: this.props.value ? numeral(this.props.value).format('0,0[.]00') : '',
            };
        }
    }

    componentWillReceiveProps(nextProps) {
        var value = nextProps.value || '';
        if (this.props.floatType) {
            if (value.match(/.$/)) {

            } else {
                value = value ? numeral(value).format('0,0[.]00') : '';
            }
        } else {
            value = value ? numeral(value).format('0,0[.]00') : '';
        }
        if (this.props.zeroAllow) {
            value = value ? numeral(value).format('0,0[.]00') : 0;
        }
        this.setState({
            value: value,
        });
    }

    render() {
        let value = typeof this.state.value === 'number' ? this.state.value.toString() : this.state.value;
        return (
            <Input
                {...this.props}
                type="tel"
                pattern="[0-9]*"
                inputmode="numeric"
                novalidate
                value={value}
                onChange={(e) => {
                    this.setState({
                        value: e.target.value,
                    });
                    this.props.onChange(e);
                }}
                modifier='underbar'
                float/>
        );
    }
}

export default MoneyNumberInput;