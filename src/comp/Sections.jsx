import React, { Component } from 'react';
import Section from './Section';

class Sections extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Section 
                    height={400}
                    image="https://radgrad.ics.hawaii.edu/images/landing/abi-home-ice.png" 
                    header="Measure your progress with ICE!"   
                    content='A decent GPA is only one piece of the puzzle for a well-rounded computer science degree experience. RadGrad provides a 
                            self-assessment tool called "ICE", which stands for Innovation, Competency, and Experience.'
                    colors={{b:"rgba(0, 0, 0, 0.8)", c:"white"}}
                    flipped={false}
                />  

                
                <Section 
                    height={500}
                    image="https://radgrad.ics.hawaii.edu/images/landing/abi-explorer-career-goals.png" 
                    header="Discover new directions"   
                    content='Computer Science is changing all the time, and so your interests and career goals might evolve as well. RadGrad provides
                    "Explorers" for career goals, interest, degrees, and more so you can stay on topof the latests trends. For example, RadGrads career
                    goals include: Teacher, Network Engineer, Information Security Analyst, Database Administrator, Full Stack Developer, IoT Architect,
                    Mobile App Developer, VR/AR Engineer, Reasearch Scientist, DevOpsEngineer, Startup Co-Founder, Information System Manager, Data Scientist,
                    UX Designer, Software Developer, Robotics Engineer, Graduate School, Game Developer
                    '
                    colors={{b:"white", c:"rgba(0, 0, 0, 0.8)"}}
                    flipped={true}
                />  


            </div>
         );
    }
}
 
export default Sections;