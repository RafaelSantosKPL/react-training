import React from 'react';


export default class Content extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
            <h2>Teste</h2>
            {this.props.children}
        </div>
        )
    }
}