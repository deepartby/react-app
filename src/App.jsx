import React from 'react';
import './App.css';
import {Link, Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {FormPage} from './FormPage';
import {List} from './list';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/forms">Form Page</Link>
                            </li>
                            <li>
                                <Link to="/list">List</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/list">
                            <List />
                        </Route>
                        <Route path="/forms">
                            <FormPage />
                        </Route>
                        <Route path="/">
                            <FormPage />
                        </Route>
                    </Switch>
                </Router>
                </header>
            </div>
        );
    }
}

export default App;
