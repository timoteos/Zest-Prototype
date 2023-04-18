import React, { Component } from 'react';
import { Segment, Header, Grid, Form, Checkbox, Button, TextArea } from 'semantic-ui-react';


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Segment style={{backgroundColor: "black", height: 50 }}>
                    <Grid columns='equal'>
                        <Grid.Row columns="4" style={{color: "white"}}> 
                            <Grid.Column />
                            <Grid.Column>
                                <Header textAlign="center" style={{color: "white"}} content="About"/>
                            </Grid.Column>
                            <Grid.Column>
                                <Header  textAlign="center" style={{color: "white"}} content="Contact"/>
                            </Grid.Column> 
                            <Grid.Column />
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
         );
    }
}
 
export default Footer;