import React from 'react';
import AppNavBar from '../../Navbar/containers/appNavBar';
import DashboardNavBar from '../../Navbar/containers/dashboardNavBar';
import DashboardContent from '../containers/dashboardContent';
import { Tab, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Dashboard = (props) => {
  return (
    <div>
      <AppNavBar />
      {/* <Router> */}
        <div>
          <nav className="navbar navbar-second">
            <div className="container-fluid">
              <div className="navbar-header">
                <div className="navbar-brand" >
                  <DashboardNavBar tabInfo={props.tabInfo} />
                </div>
              </div>
            </div>
          </nav>
          <DashboardContent />
        </div>
      {/* </Router> */}
      
      {/* <DashboardNavBar tabInfo={props.tabInfo} /> */}
      {/* <DashboardContent /> */}
      {/* <Tab.Container id="dashboard-tabs">
        <Row className="clearfix">
          <Col sm={12}>
            <DashboardNavBar tabInfo={props.tabInfo} />
          </Col>
          <Col sm={12}>
            <section className="content">
              <DashboardContent tabInfo={props.tabInfo} />
            </section>
          </Col>
        </Row>
      </Tab.Container> */}
    </div>
  )
}

export default Dashboard
