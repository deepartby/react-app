import React from 'react';
import apiService from '../services/ApiService'

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.match.params);
        this.props.getUserById(this.props.match.params.id);
    }

    render() {
        const {activeUser} = this.props;
        return activeUser && (
            <div className='wrapper'>
                <h2>User details</h2>
                <p>Name: {activeUser.name}</p>
                <p>Surname: {activeUser.surname}</p>
                <p>Gender: {activeUser.gender}</p>
            </div>
        ) || (<p>User not found</p>);
    }
}

export default UserDetails

