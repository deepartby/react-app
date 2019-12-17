import React from 'react';
import {useParams} from "react-router-dom";

export class DetailsPage extends React.Component{
    id = '';
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        const { id } = this.props.match && this.props.match.params;
        return (
            <div>{id}</div>
        );
    }
}