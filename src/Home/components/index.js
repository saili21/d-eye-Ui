import React from 'react';
import DEYEImg from '../../assets/images/home-image.png'
import { Tabs, Tab, Row, Col } from 'react-bootstrap';
import Timeline from '../containers/timeline';


const Home = (props) => {
	return (
		// <Row style={{ margin: '40px 20px 0 20px' }}>
		// 	<Col md={7} sm={12}>
		// 		<Tabs className="homeTabs"
		// 			id="controlled-tab-example"
		// 		>
		// 			<Tab eventKey={1} title="Timeline">
		// 				<Timeline />
		// </Tab>
		// 			<Tab eventKey={2} title="Collabs">
		// 				Tab 2 content Collabs
		// </Tab>
		// 			<Tab eventKey={3} title="Channels" >
		// 				Tab 3 content Channels
		// </Tab>
		// 		</Tabs>
		// 	</Col>
		// 	<Col md={4} sm={12}>
		// 		<div> Knowledge Panel </div>
		// 	</Col>
		// </Row>
		<section className="content">
			<h2>Welcome to D-Eye System</h2>
			<div className="container">
				<img src={DEYEImg} className="img-responsive center-block" alt="D-eye" />
				<h3 className="text-center">Select apps from the apps drawer &nbsp;<span className="fa fa-th"></span>&nbsp; to get started</h3>
			</div>
		</section>
	)
}

export default Home
