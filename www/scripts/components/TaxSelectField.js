import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import {TAX_PCT} from '../constants/receipts';
class TaxSelectField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render() {
        return (
            <SelectField
                floatingLabelText="Thuế suất"
                value={this.state.value}
                fullWidth
                onChange={(event, index, value) => {
                    this.setState({
                        value: value,
                    });
                    this.props.onChange(event, index, value);
                }}
            >
                {TAX_PCT
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

export default TaxSelectField;