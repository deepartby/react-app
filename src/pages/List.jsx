import React from 'react';
import { withRouter } from 'react-router-dom';

class List extends React.Component {

    handleShowDetails = (e) => {
        //this.props.onShowDetails(e.target.parentElement.getAttribute('listId'));
        this.props.history.push(`/user-details/${e.target.parentElement.getAttribute('listId')}`);
    }
//сделать проверку isRemoveShow если да то рендерим кнопки
    render() {
        return (
            <div className="wrapper">
                <h2>List Page</h2>
                {(this.props.items.length > 0) &&
                    (<table>
                        <tbody>
                            {this.props.items.map((item, index) => (
                                <tr onClick={
                                    //передаем индекс в функцию callback
                                    //(index) => {}
                                this.handleShowDetails
                                } listId={item.id} key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>)}
            </div>
        )
    }
}

export default withRouter(List)