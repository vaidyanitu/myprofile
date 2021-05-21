import React from 'react';
import {Navbar,Nav,NavItem, NavLink} from 'react-bootstrap';
import logo from '../logo.svg';
import { LinkContainer } from "react-router-bootstrap";

class Navmenu extends React.Component{
    
    constructor(props){
        // debugger;
        super(props);
        this.state={
            heading:null,
        }
        console.log(this.props.menu);
    }
    
    componentDidMount() {
        const currentPath = window.location.pathname;
        console.log(currentPath);
        this.setState({
            heading:currentPath
        });
    }

     menuitems=this.props.menu.map((item)=>
     <LinkContainer key={"Link"+item} to={"/"+item}>
         <Nav.Link style={{margin:"5px"}}>{item}</Nav.Link>
    </LinkContainer>       
    );

    navStyle = {
        float : 'right'
    };

    render(){
        return(
            <Navbar style={{margin:20}}>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"                    
                />{' '}
                {this.props.name}
                </Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "85%" }} activeKey={window.location.pathname}> 
                <NavItem><NavLink></NavLink></NavItem>                         
                   {this.menuitems}
                </Nav>            
        </Navbar>
        );
    }

}
export default Navmenu;