import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Segment, Form, Popup, Button, Icon } from 'semantic-ui-react';
// import Logo from '../zest-logo.png';

class NavBar extends Component {


    constructor(props) {
        super(props);
        this.state = { popup:  false}
    }

    handleClick = (e, {popup}) => this.setState({popup: !this.state.popup})

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
                <div style={{display: this.state.popup ? 'block' : 'none', position: "fixed", backgroundColor: 'rgba(1,0.3,0.5, 0.9)', width: '75%', top: 0, bottom: 0, zIndex: 10, margin: '10%'}}>
                    {/* <Segment> */}
                        <Form style={{margin: '20%'}}>
                            <h1 style={{color: 'white', marginTop: '10%',}}>Login Now!</h1>

                           <Form.Input height='1000' label='email' placeholder='johndoe@gmail.com'/>
                           <Form.Input label='password' placeholder='password' />
                            <Button content='Login!' color='red'/>
                        </Form>
                    {/* </Segment> */}
                </div>
            </div>
         );
    }
}
 
export default NavBar;