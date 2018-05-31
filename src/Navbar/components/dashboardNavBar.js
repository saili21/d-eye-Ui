import React from 'react';
import { Nav, NavItem, Col, Tab, Row, Button } from 'react-bootstrap';
import DashboardContent from '../../Dashboard/containers/dashboardContent'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";
import { routeConstants } from '../../common/constants/routerConstants';

const DashboardNavBar = (props) => {

	// const navBarStyle = {
	// 	backgroundColor: '#00b2a9',
	// 	borderColor: 'transparent'
	// }

	const TabPill = ({ label, to }) => (
		<Route
			path={to}
			children={({ match }) => (
				(label == 'Home') ?
					<span style={{ marginLeft: '5px' }}>
						<NavLink className="btn btn-primary" style={{ color: 'white' }} activeClassName='is-active' to={to}>{label}</NavLink>
					</span> :
					<span style={{ marginLeft: '5px' }}>
						<NavLink className="btn btn-primary" exact style={{ color: 'white' }} activeClassName='is-active' to={to}>{label}
							<span className="ml-15" onClick={(e) => props.deleteTab(e, label)} aria-hidden="true">×</span>
						</NavLink>
					</span>
			)}
		/>
	);

	let tabs = props.tabInfo.map((tabName, index) => {
		let routeUrl = routeConstants[tabName];
		return <TabPill key={index} to={routeUrl} label={tabName} />
		// (index === 0) ?
		// 	<NavItem key={index} eventKey={index}>{tabName} </NavItem> :
		// 	<NavItem key={index} eventKey={index}>{tabName} <span onClick={() => props.deleteTab(tabName)} aria-hidden="true">×</span></NavItem>
	});

	return (
		<div>
			{tabs}
		</div>

		// <Tab.Container id="dashboard-tabs">
		// 	<Row className="clearfix">
		// 		<Col sm={12}>
		// 			{/* <DashboardNavBar tabInfo={props.tabInfo} /> */}
		// 			<Nav bsStyle="pills" className="dashboardNavBar" style={navBarStyle}>
		// 				{tabs}
		// 			</Nav>
		// 		</Col>
		// 		<Col sm={12}>
		// 			<section className="content">
		// 				<DashboardContent tabInfo={props.tabInfo} />
		// 			</section>
		// 		</Col>
		// 	</Row>
		// </Tab.Container>
	)
}

export default DashboardNavBar
