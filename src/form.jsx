import React from 'react';

export class Form extends React.Component {
    constructor(props){
       super(props);
    }

    changeField = (name, value) => {
            this.props.onChangeField({name, value});
    };

    render() {
        return (
            <form>
                <input onChange={({target}) => this.changeField('first', target.value)}/>
                <input onChange={({target}) => this.changeField('second', target.value)}/>
                <input onChange={({target}) => this.changeField('third', target.value)}/>
            </form>
        )
    }
}