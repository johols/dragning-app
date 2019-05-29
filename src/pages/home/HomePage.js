import React, { Component } from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Header, Icon, Image, Segment } from 'semantic-ui-react';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Segment inverted textAlign='center' style={{ minHeight: 700, padding: '1em 0em', backgroundColor: '#0f418c' }} vertical>
          <Container text>
            <Header as='h1' content='Intryck från Nordic.js 2018' inverted style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}/>
            <Header as='h2' content='Intressanta dragningar, personliga observationer, hett just nu' inverted style={{ fontSize: '1.7em', fontWeight: 'normal' }}/>
            <Link to='/presentations'>
              <Button inverted size='huge'>Presentationer<Icon name='right arrow' /></Button>
            </Link>
          </Container>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <h3>6 - 7 september, Stockholm</h3>
                <p style={{ fontSize: '1.33em' }}>
                "Nordic.js is a single track conference with talks by internationally renowned speakers and rising stars in the JavaScript community. You’ll hear about fun experiments, learn about the latest in JavaScript, and connect with other passionate developers."" 
                </p>
                <h3>Upplägg</h3>
                <p style={{ fontSize: '1.33em' }}>
                  20 presentationer, lightningtalks, utställningsarea
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                    bordered
                    rounded
                    size='medium'
                    src={require('../../images/retro-selection-of-city-stamps.jpg')}
                  />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
               <Grid.Column  width={6}>
                <Image
                    bordered
                    rounded
                    size='big'
                    src={require('../../images/IMG_0020.jpg')}
                  />
                  <br/>
                  <Image
                    bordered
                    rounded
                    size='big'
                    src={require('../../images/IMG_0021.jpg')}
                  />
                  <br/>
                  <Image
                    bordered
                    rounded
                    size='big'
                    src={require('../../images/IMG_0028.jpg')}
                  />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
           <Grid celled='internally' columns='equal' stackable>
             <Grid.Row textAlign='center'>
               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                 <h3>Länk</h3>
                 <p style={{ fontSize: '1.33em' }}>http://nordicjs.com/</p>
               </Grid.Column>
               <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                 <h3>Vdonec enim diam vulputate</h3>
                 <Link to='/ships'>
                   <Button size='huge'>Knapp </Button>
                </Link>
               </Grid.Column>
             </Grid.Row>
           </Grid>
         </Segment>
      </div>
    );
  }
}

export default HomePage;