import React, { Component } from 'react'
import DashboardNavbarComponent from '../components/dashboardNavBar'
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { routeConstants } from '../../common/constants/routerConstants';

class DashboardNavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    }
  }

  componentWillMount() {
    if (localStorage.getItem('tabs')) {
      this.setState({
        tabs: localStorage.getItem('tabs').split(',')
      })
    } else {
      this.setState({
        tabs: Object.create(this.props.tabInfo)
      })
    }
  }

  componentWillReceiveProps(nextprops) {
    if (localStorage.getItem('tabs')) {
      this.setState({
        tabs: localStorage.getItem('tabs').split(',')
      })
    } else {
      this.setState({
        tabs: Object.create(nextprops.tabInfo)
      })
    }
  }

  deleteTab = (e,tabName) => {
    e.preventDefault();
    let routeUrl = this.getPreviousTab(tabName);
    this.props.dashboardActions.deleteTab(tabName);
    this.props.history.push(routeUrl);
  }

  getPreviousTab = (tabName) => {
    let index;
    let previousTab;
    if (localStorage.getItem('tabs')) {
      let tabsArray = localStorage.getItem('tabs').split(',');
      index = tabsArray.indexOf(tabName);
      previousTab = tabsArray[index - 1];
    } else {
      index = this.props.tabInfo.indexOf(tabName);
      previousTab = this.props.tabInfo[index - 1];
    }
    return routeConstants[previousTab];
  }

  render() {
    return (
      <DashboardNavbarComponent
        deleteTab={this.deleteTab}
        tabInfo={this.state.tabs} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardNavBar))
