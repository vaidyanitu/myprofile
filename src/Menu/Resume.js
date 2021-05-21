import React from 'react';
import Title from './Title';

class Resume extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:null,
        };
    }

    render(){
        return(        
        <div>
            <Title heading={window.location.pathname} subheader="4+ years of experience"/>
            My Resume
        </div>
        );
    }
}
export default Resume;