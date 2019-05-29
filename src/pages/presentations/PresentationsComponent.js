import React, { Component } from 'react';
import { Grid, Container, Header, Segment, Icon } from 'semantic-ui-react';

import posed from 'react-pose';
import PresentationsList from './PresentationsList';


class PresentationsComponent extends Component {
    
    render() {
        const Holder = posed.div({
            enter: { staggerChildren: 50 }
        });
        
        const P = posed.p({
            enter: { x: 0, opacity: 1 },
            exit: { x: 50, opacity: 0 }
        });
        const Itemj = posed.div({
            enter: { x: 0, opacity: 1 },
            exit: { x: 150, opacity: 0 }
        });
        return (
          <div className="contact-page">
            <Segment style={{ padding: '8em 0em' }} vertical>
              <Container text>
                <Holder>
                  <Header as='h3' style={{ fontSize: '2em', color:'grey' }}>Line up</Header>
                </Holder>
                <P>20 presetationer, här är ett urval</P>
                <Grid container stackable relaxed>
                  <Itemj>
                    <Grid.Row>
                      <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                        <Icon name='bullhorn' size='huge'/>
                        <p style={{fontSize:'1.33em'}}>
                            ------------
                        </p>
                      </Grid.Column>
                    </Grid.Row>
                  </Itemj>
                  {this.props.pres.fetched ? (<PresentationsList list={this.props.pres.presentations}/>) : (<p>väntar..</p>)}
                </Grid>
              </Container>
            </Segment>
          </div>
        );
    }
}
export default PresentationsComponent;