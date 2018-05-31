import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Route, withRouter } from 'react-router-dom';
import * as dashboardActionsCreator from '../../actions/dashboard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BarChartComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: props.chartLabel,
          backgroundColor: props.barChartColor,
          borderColor: props.barChartColor,
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56]
        }
      ]
    };

  }

  navigateToDetails = (e) => {
    console.log('clikced bar',e);
    this.props.dashboardActions.addTab('Split PO Level');
  }

  render() {

    return (
      <div style={{height:300}}>
      <Bar
        data={this.data}
        width={100}
        height={50}
        options={{
          maintainAspectRatio: false
        }}
        onElementsClick={(e) => this.navigateToDetails(e)}
      />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'dashboardActions': bindActionCreators(dashboardActionsCreator, dispatch)
})

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(BarChartComponent))