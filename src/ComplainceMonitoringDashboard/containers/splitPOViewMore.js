import React, { Component } from 'react'
import SplitPoViewMoreComponent from '../components/splitPOViewMore'
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


class SplitPoViewMore extends Component {

  addTab = () => {
    //add tab
    this.props.dashboardActions.addTab('Split PO Level');
  }

  render() {
    return (
      <SplitPoViewMoreComponent
      addTab={this.addTab} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SplitPoViewMore))
