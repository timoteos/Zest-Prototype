import React, { Component } from 'react';
import { Segment, Grid, Image, Header} from 'semantic-ui-react';


class Section extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { image, content, header, flipped, colors, height } = this.props;
        const text = (
                <div style={{}}>
                    <Header content={header} size="huge" style={{color: colors.c}}/>
                    <p>{content}</p>
                </div>
            )
        
        console.log(text)
        return ( 
            <div>
                <Segment style={{backgroundColor: colors.b, color: colors.c, height: {height}, fontSize: 24}}>
                    <Grid container style={{marginTop: 25, }}>
                        <Grid.Row columns="2">
                            <Grid.Column verticalAlign="middle">
                               {flipped ?  <Image centered src={image} /> : text}
                            </Grid.Column>
                            {/* <Grid.Column></Grid.Column> */}
                            <Grid.Column  verticalAlign="middle">
                               {flipped ? text : <Image src={image} />}
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
         );
    }
}
 
export default Section;