import React from 'react';
import DEYEImg from '../../assets/images/home-image.png'
import { Row, Col, Badge } from 'react-bootstrap';

const timelineCss = {
	badge: {
		marginTop: 10,
		color: 'black',
		fontWeight: 100,
		backgroundColor: 'lightgrey',
		verticalAlign: 'middle'
	}
}

const Timeline = (props) => {
	return (
		<div>
			<Row>
				<Col md={12}>
					<Badge style={timelineCss.badge}>November 2nd 2018</Badge>
				</Col>
			</Row>
		</div>
	)
}

export default Timeline
