import React from 'react';
import Title from './Title';

class Projects extends React.Component{
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
            My Projects
        </div>
        );
    }
}
export default Projects;