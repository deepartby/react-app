import React from 'react';
import styled from 'styled-components';

export class Form extends React.Component {
    constructor(props){
       super(props);
    }

    changeField = (name, value) => {
            this.props.onChangeField({name, value});
    };

    formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#666566',
        width: '100%',
        height: '300px'
    };

    render() {
        return (
            <form style={this.formStyle}>
                <Input onChange={({target}) => this.changeField('first', target.value)}/>
                <Input onChange={({target}) => this.changeField('second', target.value)}/>
                <Input onChange={({target}) => this.changeField('third', target.value)}/>
            </form>
        )
    }
}

const Input = styled.input`
    width: 100%;
    background-color: blue;
    heigth: 55px;    
`;
