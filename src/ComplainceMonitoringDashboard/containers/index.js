import React, { Component } from 'react'
import ComplianceMonitoringDashboardComp from '../components'
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


class ComplianceMonitoringDashboard extends Component {

  goToClients = () => {
    //add tab for clients
    this.props.dashboardActions.addTab('Client A');
  }

  render() {
    return (
      <ComplianceMonitoringDashboardComp
        goToClients={this.goToClients} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ComplianceMonitoringDashboard))
