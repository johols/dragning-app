import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import FixedMenu from './FixedMenu';
import './PrimaryHeader.css';

class PrimaryHeader extends Component {
  state = {};

  // hideFixedMenu = () => this.setState({ visible: false });
  hideFixedMenu = () =>{ console.log('hide'); };
  // showFixedMenu = () => this.setState({ visible: true });
  showFixedMenu = () =>{ console.log('show'); };
  render() {
    const { visible } = this.state;

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}>
          <Segment inverted textAlign='center' style={{ minHeight: 100, padding: '1em 0em', backgroundColor: '#0f418c' }} vertical>
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as={NavLink} to='/home'>Start</Menu.Item>
                <Menu.Item as={NavLink} to='/presentations'>Presentationer</Menu.Item>
                <Menu.Item as={NavLink} to='/hottopics'>Heta Topics</Menu.Item>
                <Menu.Item as={NavLink} to='/exploretopics'>Att utforska</Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}

export default PrimaryHeader;