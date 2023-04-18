import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';


const items = [{
    header: 'Microsoft Excel',
    description:
      'An office powerful tool',
    // meta: 'B.S. in Computer Science',
  },
  {
    header: 'Blender',
    description:
      'Modeling the world',
    // meta: 'P.H.D in Computer Science',
  },
  {
    header: 'Visual Studio Code',
    description:
      'Coding the future',
    // meta: 'B.S. in Computer Science',
  },
]


class DisplayCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div> 
                <Card.Group items={items}/>
            </div>
         );
    }
}
 
export default DisplayCard;