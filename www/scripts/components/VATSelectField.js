import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {VAT_TYPE} from '../constants/receipts';
class VATSelectField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render() {

        return (
            <SelectField
                floatingLabelText="Loại giá"
                value={this.state.value}
                fullWidth
                onChange={(event, index, value) => {
                    this.setState({
                        value: value,
                    });
                    this.props.onChange(event, index, value);
                }}
                labelStyle={{ color: 'red', fontWeight: 'bold'}}
            >
                {VAT_TYPE
                    .map((row, i) => {
                        return <MenuItem
                            key={i}
                            value={row.value}
                            primaryText={row.label}
                        />;
                    })}
            </SelectField>
        );
    }

}
;

export default VATSelectField;