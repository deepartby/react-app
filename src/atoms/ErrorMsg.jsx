import React from 'react';

class ErrorMsg extends React.Component {
  render() {
    return (
      <span>
          {this.props.text}
      </span>
    )
  }
}

export default ErrorMsg