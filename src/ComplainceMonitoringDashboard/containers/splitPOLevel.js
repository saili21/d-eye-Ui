import React, { Component } from 'react'
import SplitPoLevelComponent from '../components/splitPOLevel'
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


class SplitPoLevel extends Component {

  addTab = () => {
    //add tab 
    this.props.dashboardActions.addTab('Split PO ID');
  }

  render() {
    return (
      <SplitPoLevelComponent addTab={this.addTab} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SplitPoLevel))
