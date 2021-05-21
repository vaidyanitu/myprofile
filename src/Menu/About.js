import React from 'react';
import logo from '../logo.svg';

class About extends React.Component{
    constructor(props){
        super(props);        
    }
    
        render(){
        return( 
            <div className="container" style={{marginTop:100}}>
            <div className="row">
              <div className="col-sm">
                
                <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div className="col-sm">
                <span style={{color:'grey'}}>Software Developer</span>
                <h2>Nitu Vaidya</h2>
                Motivated Software Engineer with 4+ years of experience; constantly looking forward to work in a challenging environment on cutting edge technologies and to contribute meaningfully towards the organizational and personal growth. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
              </div>              
            </div>
          </div>
        
        );
    }
}
export default About;