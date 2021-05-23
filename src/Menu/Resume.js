import React from 'react';
import Title from './Title';
import {Card,Accordion, ListGroup, Button, FormLabel} from 'react-bootstrap';

const workstartyear=2016;
var education=[
    {
        EndYear:'2020',
        Degree:'Masters In Information Technology',
        University:'Leeds Beckett University',
        College:'The British College',
        Achievements:[
            "Passed with Merit",
            "Conducted Research and Prepared Reports on Emerging IT based Topics",
            "Final Dissertation on Blockchain Technology for Plastic Waste Management"
        ]
    },
    {
        EndYear:'2016',
        Degree:'Bachelors In Computer Information System (BCIS)',
        University:'Pokhara University',
        College:'Apex College',            
        Achievements:[
            "Graduated with 3.59 CGPA",
            "Achieved merit-based scholarship throughout college",
            "Elected Class Representative in the Eighth Semester",
            "Achieved Outstanding SMART performer award"
        ]
    }
];
var educationlist=education.map(data=>(    
    <ListGroup.Item key={data.Degree.replace(" ","")}>    
        <Button className='resumebutton' variant="outline-primary" >{data.EndYear}</Button>{' '}<span style={{color:'grey'}}>{data.University+', '+data.College}</span>
        <div style={{marginLeft:20}}>
            <b>{data.Degree}</b>
            <ul>
            {data.Achievements.map((dat, index)=>(                
                    <li key={index}>{dat}</li>               
            ))
            }
            </ul>
        </div>
    </ListGroup.Item>
))

var work=[
    {
        StartYear:'2019',
        EndYear:'2021',
        Duration:'2+ years',       
        Organization:'Himalayan Bank Ltd.',
        Designation:'Senior IT Assistant',
        Departments:'Himal Remit, Card Department',
        WorkDetails:[
            'Integrated Connect IPS payment system to existing Himal Remit application, added features and maintained the application. Worked on project to update banks and branches in the databases as per updates using Connect IPS Bank and branches API. Tools Used: Node Js, Php, MS-SQL',
            'Created Merchant Management System for Card Department to add merchants and maintain documents. Tools used: C# Webforms, Oracle Toad',
            'Created Dashboards to display volume of transactions based on card types such as Visa, MasterCard, SCT, etc., number of ATM transactions and their success and failure percentage, merchant Comparison Dashboards and other information. Tools used: JQuery, ChartJS, C# webforms, Bootstrap',
            'Created Credit Card API to provide Card Details to Connect IPS',
            'Created services to generate reports and send emails monthly. Added features and functionalities to existing card applications. Tools used: C# Web-Forms, Web API, Oracle Toad'
        ]
    },
    {
        StartYear:'2017',
        EndYear:'2019',
        Duration:'2 years',    
        Organization:'SPI Nepal',
        Designation:'Associate Software Engineer',
        Departments:'Allocation, Planning',
        WorkDetails:[
            'Added features and functionalities, performed bug fixes and hence contributed to the development and continuous enhancement of the company’s existing application for inventory management',
            'Analyzed business requirements, wrote stored procedures, performed unit testing for processing millions of records for data interface implementation',
            'Participated in Agile Development, Scrum methodologies',
            'Created Credit Card API to provide Card Details to Connect IPS',
            'Tools used: C#, Vb.net, MS-SQL, TFS'
        ]
    },
    {
        StartYear:'2016',
        EndYear:'2017',
        Duration:'6 months',    
        Organization:'Microsoft Innovation Center Nepal',
        Designation:'Software Developer',
        Departments:null,
        WorkDetails:[
            'Used mockup tools to create wireframes and did documentation to describe the user interface and workflow of a web application',
            'Collaborated with other developers to identify and alleviate the number of bugs in the software',
            "Participated in UNICEF's Golden 1000 Days Code Camp"
        ]
    }
]

var worklist=work.map((data, index)=>(    
    <ListGroup.Item key={index}>    
        <Button variant="outline-primary" className="resumebutton">{data.StartYear+'-'+data.EndYear}</Button>{' '}<span style={{color:'grey'}}>{data.Organization}</span>
        <div style={{marginLeft:20}}>
            <b>{data.Designation}</b><br/>
            <label>Duration:{' '+data.Duration}</label><br/>
            {data.Departments!=null?<label>Departments:{' '+data.Departments}</label>:null}
            <Accordion>
                <Accordion.Toggle as={FormLabel} variant="link" eventKey="0">
                    <span style={{color:'blue'}}>Work Details....</span>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <ul>
                        {data.WorkDetails.map((dat, index)=>(                
                                <li key={index}>{dat}</li>               
                        ))
                        }
                    </ul>
                </Card.Body>
                </Accordion.Collapse>
            </Accordion>
            
        </div>
    </ListGroup.Item>
))

class Resume extends React.Component{

   render(){
        return(        
        <div>
            <Title heading={window.location.pathname} subheader={(new Date().getFullYear()-workstartyear-1)+"+ years of experience"} />
            <div style={{margin:30}}>
                <div className="row" style={{marginBottom:20}}>
                    <div className="col-sm">
                        <Card className='mycard'>
                            <Card.Header className='mycardheader'><b>Education</b></Card.Header>
                            <Card.Body className='mycardbody'>
                            <ListGroup variant="flush" style={{fontSize:12}}>
                                {educationlist}                               
                            </ListGroup>
                            </Card.Body>
                        </Card>                    
                    </div>
                    <div className="col-sm">                             
                        <Card className='mycard'>
                            <Card.Header className='mycardheader'><b>Experience</b></Card.Header>
                            <Card.Body className='mycardbody'>
                            <ListGroup variant="flush" style={{fontSize:12}}>
                                {worklist}
                            </ListGroup>
                            </Card.Body>
                        </Card>                           
                    </div>
                </div>
                <div className="row"> 
                    <div className="col-sm">                    
                        <Card className='mycard'>
                            <Card.Header className='mycardheader'><b>Skills</b></Card.Header>
                            <Card.Body className='mycardbody'>
                            <ListGroup variant="flush" style={{fontSize:12}}>
                                <ListGroup.Item className="borderless-list-group-item">C#, Vb.net, Php, Node</ListGroup.Item>  
                                <ListGroup.Item className="borderless-list-group-item">Angular, React</ListGroup.Item>    
                                <ListGroup.Item className="borderless-list-group-item">MS Sql, Oracle </ListGroup.Item> 
                                <ListGroup.Item className="borderless-list-group-item">Web Services, Web APIs, Windows Services</ListGroup.Item>
                                <ListGroup.Item className="borderless-list-group-item">ADO.Net, Entity Framework</ListGroup.Item>                        
                            </ListGroup>
                            </Card.Body>
                        </Card>        
                    </div>      
                    <div className="col-sm"> 
                        <Card className='mycard'>
                            <Card.Header className='mycardheader'><b>Additional Qualifications</b></Card.Header>
                            <Card.Body className='mycardbody'>
                            <ListGroup variant="flush" style={{fontSize:12}}>
                                <ListGroup.Item className="borderless-list-group-item">Good Debugging and Troubleshooting Skills</ListGroup.Item>  
                                <ListGroup.Item className="borderless-list-group-item">Documentation Skills</ListGroup.Item>    
                                <ListGroup.Item className="borderless-list-group-item">Research Skills </ListGroup.Item>                         
                            </ListGroup>
                            </Card.Body>
                        </Card>   
                    </div>      
                </div>
            </div>
        </div>
        );
    }
}
export default Resume;
