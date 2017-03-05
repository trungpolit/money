import React from 'react';
import {Input} from 'react-onsenui';
const numeral = require('numeral');

class MoneyNumberInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: numeral(this.props.value).format('0,0[.]00'),
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            value: numeral(nextProps.value).format('0,0[.]00'),
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