import React, { Component } from 'react'
import ClientDashboardComponent from '../components/clientDashboard'
import * as dashboardActionsCreator from '../../common/actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';


class ClientDashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      dropdwonValue: 'Select value'
    }
    this.dropdwonData = [
      { eventKey: 1, value: 'One' },
      { eventKey: 2, value: 'Two' },
      { eventKey: 3, value: 'Three' },
      { eventKey: 4, value: 'Four' }
    ]
  }

  addTab = () => {
    this.props.dashboardActions.addTab('Split PO View More');
  }

  onDateChange = date => this.setState({ date })

  onDropdwonValueSelect = (eventKey, event) => {
    this.dropdwonData.map((object) => {
      if(eventKey === object.eventKey) {
        this.setState({
          dropdwonValue: object.value
        })
      }
    })
  }

  render() {
    return (
      <ClientDashboardComponent
        dropdwonData={this.dropdwonData}
        dropdwonValue={this.state.dropdwonValue}
        onDropdwonValueSelect={this.onDropdwonValueSelect}
        onDateChange={this.onDateChange}
        dateData={this.state.date}
        addTab = {this.addTab} />
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientDashboard))
 