import React, { Component } from 'react'
import SplitPoTriggersComponent from '../components/splitPOTriggers'
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


class SplitPoTriggers extends Component {

  // addTab = () => {
  //   //add tab 
  //   this.props.dashboardActions.addTab('Split PO');
  // }

  backToLevelOneDashboard = () => {
    this.props.history.push('/dashboard/compliance-monitoring-dashboard/split-po-level');
  }

 

  render() {
    return (
      <SplitPoTriggersComponent
      backToLevelOneDashboard = {this.backToLevelOneDashboard} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SplitPoTriggers))
