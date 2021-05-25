import React from 'react';
import Title from './Title';

class Projects extends React.Component{
    
    render(){
       
        return( 
        <div >
            <Title heading={window.location.pathname}/>            
          
        </div>
        );
    }
}
export default Projects;