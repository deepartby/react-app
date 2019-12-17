import React from 'react';
import {Link} from "react-router-dom";

export class List extends React.Component {
    constructor(props){
       super(props);
    }

    render() {
        return (
            <div>
                <h2>Hi! It's simple example some page with react router</h2>
                <ul>
                    <li><Link to="/details/samsung">Samsung</Link></li>
                    <li><Link to="/details/nokia">Nokia</Link></li>
                    <li>Iphone</li>
                    <li>Ziaomi</li>
                    <li>Huawei</li>
                    <li>...</li>
                </ul>
            </div>
        )
    }
}