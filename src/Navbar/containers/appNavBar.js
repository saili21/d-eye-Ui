import React, { Component } from 'react'
import AppNavbarComponent from '../components/appNavBar'
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardActionsCreator from '../../common/actions/dashboard';

class AppNavBar extends Component {

  constructor(props) {
    super(props);
    this.appDrawerOptions = [
      { key: 1, value: 'Compliance Monitoring Dashboard' },
      { key: 2, value: 'Report Dashboard' },
      { key: 3, value: 'Maintain Client Profile' },
      { key: 4, value: 'Maintain Simulation Workbench' },
      { key: 5, value: 'Maintain Access Role' },
      { key: 6, value: 'Maintain Audit Test Script' },
      { key: 7, value: 'Configuration and Data Ingestion Monitoring' }
    ]
  }

  goToLogin = () => {
    localStorage.clear();
    this.props.history.push('/');
  }

  onAppDrawerItemClick = (eventKey) => {
    this.appDrawerOptions.find((element) => {
      if(element.key === eventKey) {
        this.props.dashboardActions.addTab(element.value);
      }
    });
  }

  render() {
    return (
      <AppNavbarComponent goToLogin={this.goToLogin}
        appDrawerOptions={this.appDrawerOptions}
        onAppDrawerItemClick={this.onAppDrawerItemClick} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AppNavBar))
