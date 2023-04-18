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
                    image="https://as1.ftcdn.net/v2/jpg/01/70/16/00/1000_F_170160090_09PQN4o42nDIl7BLVJkLUTom3N4488dz.jpg" 
                    header="Measure your progress as you learn!"   
                    content='Learning is a long journey ahead. Start picking up new shortcuts to begin progress. Overtime as you continue to level up in skills, you level up throughout our app!'
                    colors={{b:"rgba(1, 0, 0, 1)", c:"white"}}
                    flipped={false}
                />  

                
                <Section 
                    height={500}
                    image="https://www.aihr.com/wp-content/uploads/Learning-and-development.png" 
                    header="Discover new shortcuts"   
                    content='The road to productivity knows no end. Every application has an abundance of shortcuts. Each step closer to a final product. Take a chance and learn more!
                    '
                    colors={{b:"white", c:"rgba(0, 0, 0, 0.8)"}}
                    flipped={true}
                />  


            </div>
         );
    }
}
 
export default Sections;