import React, { Component } from 'react';
import { Grid, Container, Header, Segment, Icon } from 'semantic-ui-react';

class HotTopicsPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <Segment style={{ padding: '8em 0em' }} vertical>
           <Container text>
             <Header as='h3' style={{ fontSize: '2em', color:'grey' }}>Heta tekniker</Header>

             <Grid container stackable relaxed>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    Webpack vs. Parcel
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.3)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    Node.js som backend
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    React vs. Vue vs. Angular
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.3)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                  AI, Machine Learning (TensorFlow.js)
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    Performance (chrome dev tools)
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.3)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                  Redux vs. MobX vs. Context API
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    TypeScript
                  </p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.3)', padding: '2em', marginTop:'2em', color: '#272727' }}>
                  <Icon name='chevron circle down' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    OpenSource: trend
                  </p>
                </Grid.Column>
              </Grid.Row>
             </Grid>

           </Container>
        </Segment>
      </div>
    );
  }
}
export default HotTopicsPage;