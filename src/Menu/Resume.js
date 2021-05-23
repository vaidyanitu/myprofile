import React from 'react';
import Title from './Title';

class Resume extends React.Component{
     workstartyear=2016;
     
   render(){
        return(        
        <div>
            <Title heading={window.location.pathname} subheader={(new Date().getFullYear()-this.workstartyear-1)+"+ years of experience"} />
            My Resume
        </div>
        );
    }
}
export default Resume;
