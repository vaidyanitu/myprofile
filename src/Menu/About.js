import React from 'react';
// import logo from '../logo.svg';


class About extends React.Component{
    
        render(){
        return( 
          
          <div className="row flex-v-align">
          <div className='col-sm-5'>
            <img src={process.env.PUBLIC_URL + '/mpic.jpg'} alt='logo' className='photo'/>
          </div>
            <div className='col-sm-7'>
              <div className="home-text hp-left">
                <span style={{color:'grey'}}>Software Developer</span><br/>
                <h2>Nitu Vaidya</h2>
                Motivated Software Engineer with 4+ years of experience;
                constantly looking forward to work in a challenging environment 
                on cutting edge technologies and to contribute meaningfully towards 
                the organizational and personal growth. Well-versed in technology and 
                writing code to create systems that are reliable and user-friendly.                                                          
              </div>
            </div>
          </div>
        );
    }
}
export default About;