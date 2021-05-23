import React from 'react';
import Title from './Title';
import {Card} from 'react-bootstrap';
import {HouseFill,Linkedin,EnvelopeFill} from 'react-bootstrap-icons';

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
            <div className="row">
              <div className="col-sm">
            <Card>
                <Card.Body>
                    <EnvelopeFill/>{' '}vaidyamenitu@gmail.com<br/>
                    <Linkedin/>{' '}<a href='http://www.linkedin.com/in/nituvaidya'>linkedin.com/in/nituvaidya</a><br/>
                    <HouseFill/>{' '}Patan, Lalitpur<br/>
                </Card.Body>
            </Card>
            </div>
            <div className="col-sm"></div>
            </div>
        </div>
        );
    }
}
export default Contact;