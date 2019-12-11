import React from 'react';
import {Form} from './form';

export class FormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                first: '',
                second: '',
                third: ''
            }
        }
    }

    onChangeFieldHandler = (change) => {
        this.setState((state, props) => ({
            form: { ...state.form, [change.name]: change.value }
        }));
    };

    render() {
        return  (
            <div>
                <Form onChangeField={this.onChangeFieldHandler}/>
                <p>{this.state.form.first}</p>
                <p>{this.state.form.second}</p>
                <p>{this.state.form.third}</p>
            </div>
        )
    }
}