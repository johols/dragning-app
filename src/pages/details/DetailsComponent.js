import React, { Component } from 'react';
import { Container, Header, Segment, Image, Divider } from 'semantic-ui-react';
import './Details.css';
import posed from 'react-pose';


class DetailsComponent extends Component {
    componentDidMount() {
        console.log('Component DetailsComponent DID MOUNT!', this.props);
     }
    
    render() {
        const Holder = posed.div({
            enter: { staggerChildren: 50 }
        });
        
        const P = posed.p({
            enter: { x: 0, opacity: 1 },
            exit: { x: 50, opacity: 0 }
        });

        const T = posed.p({
            enter: { x: 0, opacity: 1 },
            exit: { x: 450, opacity: 0 }
        });

        return (
            <div className="contact-page">
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    {this.props.details.details &&<Image floated='right' size='small' src={this.props.details.details.imageurl} circular/>}
                    <Holder>
                        <Header as='h3' style={{ fontSize: '2em', color:'grey' }}>{this.props.details.details && this.props.details.details.title}</Header>
                    </Holder>
                    
                    <P style={{fontWeight: 'bold', marginTop: '30px', marginBottom: '30px'}}>{this.props.details.details && this.props.details.details.speaker}</P>
                    <T>{this.props.details.details && this.props.details.details.body}</T>
                    <T>{this.props.details.details && this.props.details.details.about}</T>
                    <Divider></Divider>        
                    <P style={{fontWeight: 'bold',marginTop: '30px'}}>Betyg: {this.props.details.details && this.props.details.details.grade}</P>
                    <P style={{fontWeight: 'bold',marginTop: '30px'}}>Kommentar: </P>
                    <T>{this.props.details.details && this.props.details.details.comment}</T>
                </Container>
            </Segment>
            </div>
        );
    }
}
export default DetailsComponent;