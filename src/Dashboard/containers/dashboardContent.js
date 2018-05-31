import React, { Component } from 'react'
import DashboardContentComponent from '../components/dashboardContent'
import { Route, withRouter } from 'react-router-dom';


class DashboardContent extends Component {

  render() {
    return (
      <DashboardContentComponent
        tabInfo={this.props.tabInfo} {...this.props} />
    )
  }
}

export default withRouter(DashboardContent)
