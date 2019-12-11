import React from 'react';

export class List extends React.Component {
    constructor(props){
       super(props);
    }

    render() {
        return (
            <div>
                <h2>Hi! It's simple example some page with react router</h2>
                <ul>
                    <li>Samsung</li>
                    <li>Nokia</li>
                    <li>Iphone</li>
                    <li>Ziaomi</li>
                    <li>Huawei</li>
                    <li>...</li>
                </ul>
            </div>
        )
    }
}