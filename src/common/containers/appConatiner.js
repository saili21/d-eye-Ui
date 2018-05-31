import React, { Component } from 'react';
// import NavBar from '../../Navbar/containers/navBar'
import Login from '../../Login/containers';
import Dashboard from '../../Dashboard/containers';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';
import ComplianceMonitoringDashboard from '../../ComplainceMonitoringDashboard/containers';
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir
} from '../utils/authWrapper';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={userIsNotAuthenticatedRedir(Login)} />
            <Route path='/dashboard' component={userIsAuthenticatedRedir(Dashboard)} />
          </Switch>
        </Router>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
