import React from 'react';
import { Accordion, Card} from 'react-bootstrap';
class Title extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        return(                 
            <div>
                <Accordion  >
                    <Card style={{height:120, backgroundColor:'#FCF8F7'}}>                       
                    <Card.Body style={{marginBottom:20}}>
                        <label style={{float:'right', color:'silver'}}>{this.props.subheader}</label><br/>
                 <h1 style={{marginLeft:30}}>{this.props.heading.replace("/",'')}</h1>
                 </Card.Body>
                 </Card>
                 </Accordion>
                 </div> 
            
        
        );
    }
}
export default Title;