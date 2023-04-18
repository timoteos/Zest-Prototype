import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Header, Button } from 'semantic-ui-react';
import DisplayCard from './DisplayCard'


class Jumbotron extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            hidden1: " sSmoke line anime-type ",
            hidden2: " hide sSmoke startEnd anime-type2 line2 "
         }
    }


    componentDidMount() {
        setTimeout(() => { 
            this.setState({hidden2: " unhide sSmoke startEnd anime-type2  line2  typewriterReverse", });
            this.setState({hidden1: "sSmoke noLine"})
        }, 5000);
    }

    render() { 
        const sHeader = {
            fontWeight: 700,
            fontSize: 72
        }
        return ( 
            <div>
                <Segment basic style={{height: 560, backgroundColor: "black", paddingTop: 160}}>
                    <Header size="huge" textAlign="center">
                        <span className="sWhite" style={sHeader}>Welcome to </span>
                        <span className="sGreen" style={sHeader}>ZEST</span>
                    </Header>
                    <Header size="medium" textAlign="center" >
                        <p className={this.state.hidden1}>Learn, Maintain, Perform! Shortcuts to Improve Production!</p>
                        
                    </Header>

                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="3000" >
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <DisplayCard></DisplayCard>
                            </div>
                            <div className="carousel-item">
                                <DisplayCard></DisplayCard>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>

                    <Header size="small" >
                        <p className={this.state.hidden2}>What are you waiting for?</p>
                    </Header>

                    <Header textAlign="center">
                        <Button content='Join Now!' color="red" />
                    </Header>
                </Segment>
            </div>
        );
    }
}
 

export default Jumbotron;