import React, { Component } from 'react';
import { Segment, Grid, Divider, Header, Image } from 'semantic-ui-react';


class Slide extends Component {
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
                                <div className="slideLeft">
                                   <div style={{maxWidth: 500, marginLeft: 100}}>
                                    <Header size="huge" textAlign="center" content="Pay it forward" style={{marginTop: "30px", color: "white", fontSize: 36}}/>
                                    <div className="underlineLeft"></div>
                                    <p style={{fontSize: 24}}>
                                        RadGrad offers opportunities for students to give back to their academic community both during their degree program and after they graduate.
                                        During your time as a student, you can provide advice about courses you've already taken to those coming after you. Students have contributed 126 course reviews so far.
                                        After you graduate, you can become a mentor, and answer student questions about life after graduation and how to best prepare for it. We have 6 mentors from locations including: New York City, NY, Palo Alto, CA, San Francisco, CA, Honolulu, HI.
                                    </p>
                                   </div>
                                   <Image style={{opacity: 1, width: "40%", height: "40%", bottom: "500px", left: "800px"}}  className="leftImage" src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1511848673/1511848671.jpg"/>
                                   <Image style={{opacity: 1, width: "40%", height: "40%", bottom: "460px", left: "800px"}}  className="leftImage" src="https://www.aihr.com/wp-content/uploads/Learning-and-development.png"/>
                                </div>
                            </Grid.Column>
                            <Grid.Column className="offset">
                                <div className="slideRight" style={{display: "flex"}}>
                                <span style={{fontSize: 30, position: "relative", top: 250}}>More</span>
                                   <div style={{maxWidth: 500, marginLeft: 200}}>
                                    <Header size="huge" textAlign="center" content="Level up" style={{marginTop: "100px", fontSize: 36, width: 500}}/>
                                    <div className="underlineRight" style={{}}></div>
                                    <p style={{fontSize: 18}}>
                                        The RadGrad path to an improved degree experience is long and challenging. To recognize stages in your progress, RadGrad defines six levels of achievement: white, yellow, green, blue, brown and black.
                                        Right now, there are 84 student(s) at Level One, 480 at Level Two, 84 at Level Three, 5 at Level Four, 2 at Level Five, and 4 at Level Six.
                                        Once you achieve a level, the corresponding badge appears in your profile and is visible to other community members. In addition, your advisor will give you a laptop sticker representing your level. Congratulations, grasshopper!
                                    </p>
                                   </div>
                                   <div>
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "50px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-1-icon.png"/>
                                        <Header size="huge" content="Level 1" />
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "50px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-2-icon.png"/>
                                        <Header size="huge" content="Level 2" />
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "50px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-3-icon.png"/>
                                        <Header size="huge" content="Level 3" />
                                    </div>
                                    <div>
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "60px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-4-icon.png"/>
                                        <Header size="huge" content="Level 4" />
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "60px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-5-icon.png"/>
                                        <Header size="huge" content="Level 5" />
                                        <Image style={{opacity: 1, width: "10%", height: "10%", marginTop: 100, marginLeft: 100, bottom: "60px"}}  className="leftImage" src="https://radgrad.ics.hawaii.edu/images/level-icons/radgrad-level-6-icon.png"/>
                                        <Header size="huge" content="Level 6" />
                                    </div>
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
export default Slide;