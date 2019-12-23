import React from 'react';
import ErrorMsg from '../atoms/ErrorMsg'
import Userform from '../molecules/Userform'
import Output from '../molecules/Output'

class Home extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }
    render() {
        return (
            <div className="App">
                <h2>Home Page</h2>
                <Userform user={this.props.user}
                          errorFlag={this.props.errorFlag}
                          onUserChange={this.props.onUserChange}
                          onUserSubmit={this.props.onUserSubmit} />
                {(this.props.errorFlag) && (<ErrorMsg text='Fill all fields first' />)}
                {(this.props.items && this.props.items.length > 0) &&
                    (<Output items={this.props.items}
                             onUserRemove={this.props.onUserRemove}
                             onShowDetails={this.props.onShowDetails} />)}
            </div>
        );
    }
}

export default Home