import React from 'react';
import Title from './Title';

class Portfolio extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
        };
    }

    render(){
        return( 
            <div>
            <Title heading={window.location.pathname}/>
            My Portfolio
        </div>
        );
    }
}
export default Portfolio;