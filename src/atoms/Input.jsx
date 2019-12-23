import React from 'react';

class Input extends React.Component {

    handleChange = (e) => {
        this.props.onUserChange(e.target.id, e.target.value);
    }

    render() {
        return (
            <input
            className="input"
            id={this.props.fieldName}
            onChange={this.handleChange}
            value={this.props.user.[this.props.fieldName]}
        />
        )
    }
}

export default Input