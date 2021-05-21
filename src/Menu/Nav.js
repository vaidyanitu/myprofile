import React, { Component } from 'react';
import {Navbar,Nav,NavItem, NavLink} from 'react-bootstrap';
import logo from '../logo.svg';
import { LinkContainer } from "react-router-bootstrap";

class Navmenu extends React.Component{
    
    constructor(props){
        debugger;
        super(props);
        console.log(this.props.menu);
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
            <Navbar>
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"                    
                />{' '}
                {this.props.name}
                </Navbar.Brand>
                <Nav className="justify-content-end" style={{ width: "80%" }} activeKey={window.location.pathname}> 
                <NavItem><NavLink></NavLink></NavItem>                         
                   {this.menuitems}
                </Nav>
            
        </Navbar>
        
        );
    }

}
export default Navmenu;