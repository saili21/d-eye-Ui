import React from 'react';
import { Col, Row, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import BarChart from '../../common/components/BarChart';
import DatePicker from '../../common/components/DatePicker';
import '../../assets/css/clientDashboard.css';

const ClientDashboard = (props) => {
	return (
		<div>
			<Row className="marginTop-20">
				<Col md={12}>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative">
						<form>
							<div className="form-group">
								<div className="client-dashboard">
									<Col md={12}>
										<label>Company Name:</label>
										<span>Synerzip Ltd</span>
									</Col>
									<Col md={12}>
										<label>Primary Contact:</label>
										<span>Willson Hill</span>
									</Col>
									<Col md={12}>
										<label>Selected Cycle:</label>
										<span>P2p</span>
									</Col>
								</div>
							</div>
							<div className="over-text-clientDashboard">USD 001</div>
						</form>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative">
						<div className="client-dashboard-2">
							<Col md={12} className="padding-bottom-10"><i className="fa fa-filter "></i> Filtered By Auditing:</Col>
							<Col md={3}>
								<DropdownButton
									bsStyle={'default'}
									title={props.dropdwonValue}
									key={1}
									id="cycle"
									onSelect={props.onDropdwonValueSelect}
								>
									{props.dropdwonData.map((object) => (
										<MenuItem key={object.eventKey} eventKey={object.eventKey}>{object.value}</MenuItem>
									))}
								</DropdownButton>
							</Col>
							<Col md={3}>
								<DatePicker />
							</Col>
							<Col md={3}>
								<DatePicker />
							</Col>
							<Col md={3}>
								<Button className="pull-right" bsStyle="info">Refresh Dashboard</Button>
							</Col>
						</div>
					</div>
				</Col>
			</Row>
			<Row style={{ margin: '20px' }}>
				<Col mdOffset={5} md={3}>
					<code>Last Updated on 16/10/2017 03:30 am</code>
				</Col>
				<Col md={4}>
					<Button className="pull-right" bsStyle="success"> Export Report </Button>
				</Col>
			</Row>
			<Row>
				<Col md={4}>
					<p className="bar-chart-label text-center"> Top 5 Split PO </p>
					<BarChart barChartColor='#4286f4' chartLabel="Top 5 Split PO" />
					<p onClick={props.addTab} className="bar-chart-label text-center">View More</p>
				</Col>
				<Col md={4}>
					<p className="bar-chart-label text-center"> Top 5 Duplicate Vendor</p>
					<BarChart barChartColor='#f44141' chartLabel="Top 5 Duplicate Vendor"/>
					<p className="bar-chart-label text-center">View More</p>
				</Col>
				<Col md={4}>
					<p className="bar-chart-label text-center"> Top 5 Split Payment</p>
					<BarChart barChartColor='#41e8f4' chartLabel="Top 5 Split Payment" />
					<p className="bar-chart-label text-center">View More</p>
				</Col>
			</Row>
		</div>
	)
}

export default ClientDashboard
