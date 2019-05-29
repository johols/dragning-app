import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Presentations.css';

class PresentationsList extends Component {
  
  componentDidMount() {
    
  }

  render() {
    const presentationsItems = this.props.list.map((item, idx) => {

      return <li key={idx}>
          <Card style={{margin: '40px'}}>
            <Card.Content style={{padding: '10px'}}>
              <Image floated='right' size='tiny' src={item.imageurl} circular/>
              <Card.Header>
                {item.speaker}
              </Card.Header>
              <Card.Description>
                {item.title}
              </Card.Description>
              <Card.Description>
                Betyg: {item.grade}
              </Card.Description>
            </Card.Content>
            <Link to={`/details/${item._id}`}>
              <Card.Content extra style={{backgroundColor: 'lightgrey'}}>
               <span style={{margin: '10px', fontWeight: 'bold'}}>Detaljer</span>
              </Card.Content>
            </Link>
          </Card>
        </li>;
    });
    return (
      <div>
          <ul>
            {presentationsItems}
          </ul>
      </div>
    );
  }
}
export default PresentationsList;
