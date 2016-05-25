import React from 'react';

export default class Feature extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}