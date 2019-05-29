import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as detailsActions from '../../actions/detailsActions';
import DetailsComponent from './DetailsComponent';

class DetailsContainer extends Component {

  componentDidMount() {
    this.props.actions.fetchDetails(this.props.match.params.id);
 }

  render() {
    return <DetailsComponent details={this.props.details} />
  }
}

function mapStateToProps(state, props) {
  return {
    details: state.details,
    fetching: state.fetching
  };
}

function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(detailsActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsContainer);