
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import PrimaryLayout from './common/PrimaryLayout';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PrimaryLayout />
      </BrowserRouter>
    );
  }
}

export default App;