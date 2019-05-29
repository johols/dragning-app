import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container, Menu } from 'semantic-ui-react'

class FixedMenu extends Component {
  render() {
    return (
      <Menu fixed='top' size='small'>
        <Container>
          <Menu.Item as={NavLink} to='/home'>Start</Menu.Item>
          <Menu.Item as={NavLink} to='/presentations'>Presentationer</Menu.Item>
          <Menu.Item as={NavLink} to='/hottopics'>Heta Topics</Menu.Item>
          <Menu.Item as={NavLink} to='/exploretopics'>Att utforska</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default FixedMenu;