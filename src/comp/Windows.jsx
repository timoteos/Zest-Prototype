import React, { Component } from 'react';
import { Segment, Grid, Divider, Header, Image } from 'semantic-ui-react';


class Windows extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( 
            <div>
                <Segment style={{border: "none"}}>
                    <Grid centered verticalAlign="middle"> 
                        <Grid.Row columns="2" style={{paddingTop: 0, paddingBottom: 0}}>
                            <Grid.Column className="offset">
                                <div className="windowLeft">
                                   <div style={{maxWidth: 500, marginLeft: 100}}>
                                    <Header size="huge" textAlign="center" content="Master your shortcuts, productivity, and craft" style={{marginTop: "100px", color: "white", fontSize: 36}}/>
                                    <div className="underlineLeft"></div>
                                    <p style={{fontSize: 18, color: "white"}}>
                                        Get started by engaging in our discovery quiz. Find applicatons that best suit your skills and begin to master the powerful shortcuts within.
                                        Immerse yourself in our activity to learn an retain shortcuts and increase your productivity tenfold!
                                    </p>
                                   </div>
                                   <Image style={{opacity: 0, width: "40%", height: "80%", bottom: "300px", left: "800px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/landing/abi-about-me.png"/>
                                </div>
                            </Grid.Column>
                            <Grid.Column className="offset">
                                <div className="windowRight" style={{display: "flex", backgroundColor: "black"}}>
                                   <div style={{maxWidth: 500, marginLeft: 200}}>
                                    <Header size="huge" textAlign="center" content="Master your shortcuts, productivity, and craft" style={{marginTop: "100px", fontSize: 36, width: 500, color: "white"}}/>
                                    <div className="underlineRight" style={{}}></div>
                                    <p style={{fontSize: 18, color: "white"}}>
                                        Get started by engaging in our discovery quiz. Find applicatons that best suit your skills and begin to master the powerful shortcuts within.
                                        Immerse yourself in our activity to learn an retain shortcuts and increase your productivity tenfold!
                                    </p>
                                   </div>
                                   <Image style={{opacity: 1, width: "40%", height: "80%", marginTop: 100, marginLeft: 100, bottom: "50px"}}  className="rightImage" src="https://radgrad.ics.hawaii.edu/images/landing/abi-degree-planner.png"/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
         );
    }
}
//<Divider vertical></Divider>
export default Windows;