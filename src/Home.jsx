import React from 'react';
import Feature from './feature.jsx';
import Content from './content.jsx';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
           <div>
               <Feature title="Hello World">
                   <Content>
                       <div>Corpo de um texto qualquer</div>
                   </Content>
               </Feature>
           </div>
        );
    }
}