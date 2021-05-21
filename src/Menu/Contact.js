import React from 'react';
import Title from './Title';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
        };
    }

    render(){
        return( 
            <div>
            <Title heading={window.location.pathname} subheader="Get in Touch"/>
            My Contact
        </div>
        );
    }
}
export default Contact;