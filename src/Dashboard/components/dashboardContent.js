import React from 'react';
import DEYEImg from '../../assets/images/home-image.png';
import { Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {routeConstants} from '../../common/constants/routerConstants';
import Home from '../../Home/containers';
import ComplianceMonitoringDashboard from '../../ComplainceMonitoringDashboard/containers';
import MaintainAccessRole from '../../MaintainAccessRole/containers'
import ClientDashboard from '../../ComplainceMonitoringDashboard/containers/clientDashboard';
import SpitPOViewMore from '../../ComplainceMonitoringDashboard/containers/splitPOViewMore';
import SplitPOLevel from '../../ComplainceMonitoringDashboard/containers/splitPOLevel';
import SplitPOTriggers from '../../ComplainceMonitoringDashboard/containers/splitPOTriggers';

const DashboardContent = (props) => {
	// let tabContent = props.tabInfo.map((tab, index) => (
	// 	<Tab.Pane key={index} eventKey={index}>{tab}</Tab.Pane>
	// ));
	return (
		<div>
			<Route path={routeConstants['Home']} component={Home} />
			<Route exact path={routeConstants['Compliance Monitoring Dashboard']} component={ComplianceMonitoringDashboard} />
			<Route path={routeConstants['Maintain Access Role']} component={MaintainAccessRole} />
			<Route path={routeConstants['Client A']} component={ClientDashboard} />
			<Route path={routeConstants['Split PO View More']} component={SpitPOViewMore} />
			<Route path={routeConstants['Split PO Level']} component={SplitPOLevel} />
			<Route path={routeConstants['Split PO ID']} component={SplitPOTriggers} />
		</div>
		// <Tab.Content animation>
		// 	<Tab.Pane eventKey={0}>
		// 		<section className="content">
		// 			<h2>Welcome to D-Eye System</h2>
		// 			<div className="container">
		// 				<img src={DEYEImg} className="img-responsive center-block" alt="D-eye" />
		// 				<h3 className="text-center">Select apps from the apps drawer &nbsp;<span className="fa fa-th"></span>&nbsp; to get started</h3>
		// 			</div>
		// 		</section>
		// 	</Tab.Pane>
		// 	{tabContent}
		// </Tab.Content>



	)
}

export default DashboardContent
