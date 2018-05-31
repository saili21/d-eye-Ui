import React, {Component} from 'react';
import DashboardComponent from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';

class Dashboard extends Component {

 
  render () {
    return (
      <DashboardComponent tabInfo = {this.props.tabInfo} />
    )
  }
}

const mapStateToProps = (state) => ({
  tabInfo: state.dashboard.tabComponents
})

export default withRouter(connect(mapStateToProps)(Dashboard))
