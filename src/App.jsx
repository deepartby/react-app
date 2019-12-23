import './App.css';
import React from 'react';
import List from './pages/List'
import Home from './pages/Home'
import UserDetails from './molecules/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import {connect, Provider} from "react-redux";
import {addUserA, deleteUserA, getUserA} from "./containers/usersActions";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.detailsId = undefined;
    this.state = {
      // items: Users,
      user: {
        name: '',
        surname: '',
        gender: ''
      },
      errorFlag: false,
      navigate: false
    }
  };

  handleShowDetails = (detailsId) => {
    this.props.history.push(`/user-details/${detailsId}`)
  }

  handleRemove = (removeId) => {
    let newItems = this.state.items.splice(removeId, 1);
    this.setState({ newItems });
  }

  handleChange = (target, value) => {
    this.setState({ user: { ...this.state.user, [target]: value }, errorFlag: false })
  }

  handleSubmit = () => {
    this.props.addUser(this.state.user);

    // for (let key in this.state.user) {
    //   if (this.state.user[key] === '') {
    //     this.setState({ errorFlag: true });
    //     return
    //   }
    // }
    // const newItem = this.state.user;
    // this.setState(state => ({
    //   items: state.items.concat(newItem),
    //   user: { name: '', surname: '', gender: '' }
    // }));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/list">List</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/list">
                <List items={this.props.users} onShowDetails={this.handleShowDetails} />
              </Route>
              <Route path="/home">
                <Home user={{}}
                      items={this.props.users}
                      errorFlag={false}
                      onUserChange={this.handleChange}
                      onUserSubmit={() => this.props.addUser({...this.state.user, id: (new Date()).getSeconds()})}
                      onUserRemove={this.props.deleteUser}
                      onShowDetails={this.handleShowDetails}
                />
              </Route>
              <Route path="/user-details/:id"
                     render={(props) => (<UserDetails {...props} activeUser={this.props.activeUser} getUserById={this.props.getUser}/>)}>
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}
const mapStateToProps = state => ({
  users: state.users.users,
  activeUser: state.users.activeUser
})

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUserA(user)),
  deleteUser: id => dispatch(deleteUserA(id)),
  getUser: id => dispatch(getUserA(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
