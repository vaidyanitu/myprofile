import React from 'react';
import Title from './Title';
import {Card, ListGroup} from 'react-bootstrap';
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
                <Card className='mycard'>
                    <Card.Header className='mycardheader'></Card.Header>
                    <Card.Body >
                    <ListGroup variant="flush" >
                        <ListGroup.Item className="borderless-list-group-item"> <EnvelopeFill/>{' '}vaidyamenitu@gmail.com<br/></ListGroup.Item>  
                        <ListGroup.Item className="borderless-list-group-item"><Linkedin/>{' '}<a href='http://www.linkedin.com/in/nituvaidya'>linkedin.com/in/nituvaidya</a><br/>
</ListGroup.Item>    
                        <ListGroup.Item className="borderless-list-group-item"><HouseFill/>{' '}Patan, Lalitpur<br/> </ListGroup.Item>                         
                    </ListGroup>
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