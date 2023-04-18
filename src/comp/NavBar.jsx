import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu } from 'semantic-ui-react';
// import Logo from '../zest-logo.png';

class NavBar extends Component {


    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleClick = (e, {popup}) => console.log('click')//this.setState({active: popup})

    render() { 
        return ( 
            <div>
                <Menu secondary className="nav-bar" style={{position: "fixed", zIndex: 4, backgroundColor: "black", width: "100%", height: 75}}>
                    <Menu.Item position="left" style={{fontSize: "1.71428571rem"}}>
                        {/* <img src={require('../zest-logo.png')} size='big' style={{marginRight: 25}} alt="logo"/> */}
                        {/* <span style={{fontWeight: 700}}>RAD</span>
                        <span style={{fontWeight: 400}}>GRAD</span> */}
                    </Menu.Item>

                    <Menu.Item name="Supported Software" style={{fontWeight: 700, color: "#FF0000"}}/>
                       
                    <Menu.Item name="LOGIN" style={{fontWeight: 700, marginRight: 100, color: "#FF0000"}} onClick={this.handleClick}/>
                </Menu>
                <div style={{position: "fixed", backgroundColor: 'white', width: '75%', top: 0, bottom: 0, zIndex: 10, margin: '10%'}}>
                    oofssssssssssssdsdssssdssds
                </div>
            </div>
         );
    }
}
 
export default NavBar;