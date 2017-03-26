import React from 'react';
import {Input} from 'react-onsenui';
const numeral = require('numeral');
const beautifier = function (value, props) {
    value = typeof value === 'number' ? value.toString() : value;
    var dotCount = typeof value === 'string' ? (value.match(/\./g) || []).length : 0;
    var allowStr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.'];
    if (value) {
        for (let i = 0; i < value.length; i++) {
            let char = value[i];
            if (allowStr.indexOf(char) === -1) {
                value = value.replace(char, '');
            }
        }
    }
    if (props.floatType) {
        if (value.match(/\.$/) && dotCount === 1) {

        } else {
            value = value ? numeral(value).format('0,0[.]0[0]') : '';
        }
    } else {
        value = value ? numeral(value).format('0,0[.]00') : '';
    }
    if (props.zeroAllow) {
        value = value ? numeral(value).format('0,0[.]00') : 0;
    }
    if (props.max) {
        let prettyValue = numeral(value).value();
        value = (prettyValue > props.max) ? numeral(props.max).format('0,0[.]00') : value;
    }
    return value;
};

class MoneyNumberInput extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.zeroAllow) {
            this.state = {
                value: this.props.value ? numeral(this.props.value).format('0,0[.]00') : 0,
            };
        } else {
            this.state = {
                value: this.props.value ?  numeral(this.props.value).format('0,0[.]00'):'',
            };
        }
    }

    componentWillReceiveProps(nextProps) {
        let value = beautifier(nextProps.value, nextProps);
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
                // pattern="\d+(,\d{3})?(\.\d{2})?"
                inputmode="numeric"
                value={value}
                onChange={(e) => {
                    let value = beautifier(e.target.value,this.props);
                    this.setState({
                        value: value,
                    });
                    this.props.onChange(e);
                }}
                modifier='underbar'
                float/>
        );
    }
}

export default MoneyNumberInput;