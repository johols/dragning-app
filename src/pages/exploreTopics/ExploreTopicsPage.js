import React, { Component } from 'react';
import { Grid, Container, Header, Segment, Icon } from 'semantic-ui-react';

class ExploreTopicsPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <Segment style={{ padding: '8em 0em' }} vertical>
           <Container text>
             <Header as='h3' style={{ fontSize: '2em', color:'grey' }}>Utforska</Header>

             <Grid container stackable relaxed>
              
            
              <Grid.Row>
                <Grid.Column textAlign='center'  style={{  backgroundColor: 'rgba(156, 184, 189, 0.9)', padding: '2em', color: '#272727' }}>
                  <Icon name='mail' size='large'/>
                  <p style={{fontSize:'1.33em'}}>
                    Render props > HOC - HOC is still widely used, but there are strong arguments against it.
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
export default ExploreTopicsPage;