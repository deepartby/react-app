import React from 'react';
import { withRouter } from 'react-router-dom';

class Output extends React.Component {

  handleRemove = (id) => {
    this.props.onUserRemove(id);
  };
  
  handleShowDetails = (e) => {
    //this.props.onShowDetails(e.target.parentElement.getAttribute('listId'));
    this.props.history.push(`/user-details/${e.target.parentElement.getAttribute('listId')}`);
  };

  render() {
    return (
      <table>
        <tbody>
          {this.props.items && this.props.items.map((item, index) => (
              <tr listId={item.id} key={index}>
                <td onClick={this.handleShowDetails}>{item.name}</td>
                <td onClick={this.handleShowDetails}>{item.surname}</td>
                <td onClick={this.handleShowDetails}>{item.gender}</td>
                <td><img onClick={() => this.handleRemove(item.id)} className='remove-icon' width='20px' src={require("../assets/remove.svg")} alt="remove" /></td>
              </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default withRouter(Output)