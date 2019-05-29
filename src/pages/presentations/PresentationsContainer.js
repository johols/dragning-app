import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as presentationsActions from '../../actions/presentationsActions';
import PresentationsComponent from './PresentationsComponent';

class PresentationsContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchPresentations();
 }

  render() {
    return <PresentationsComponent pres={this.props.presentations} test={'jhej'}/>
  }
}

function mapStateToProps(state, props) {
  return {
    presentations: state.presentations,
    fetching: state.fetching
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(presentationsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PresentationsContainer);