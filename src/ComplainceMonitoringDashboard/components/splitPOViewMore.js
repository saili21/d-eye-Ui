import React from 'react';
import { Col, Row, Button, Table } from 'react-bootstrap';
import '../../assets/css/complianceMonitoringDashboard.css';
import MultiSelect from '../../common/components/MultiselectDropdown';
import Pagination from "react-js-pagination";
const SplitPoViewMore = (props) => {
	return (
		<div>
			<Row className="marginTop-20">
				<Col md={12}>
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 position-relative">
						<form>
							<div className="form-group">
								<div className="split-po-section">
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
									<Col md={12}>
										<label>Review Period From:</label>
										<span>1/10/2017 - 30/10/2017</span>
									</Col>
								</div>
							</div>
							<div className="over-text-clientDashboard">USD 001</div>
						</form>
					</div>
				</Col>
				<Col md={12} className="text-center"><code>Last Updated on 16/10/2017 03:30 am</code></Col>
				<Col md={12}>
					<Col md={12}>
						<Button className="pull-right" bsStyle="info">Export Report</Button>
					</Col>
				</Col>
				<Col className="marginTop-20 paddingLeft-30" md={12} >
					<Table bordered condensed hover>
						<thead>
							<tr>
								<th>Requestor Id</th>
								<th>Requestor No</th>
								<th>Department</th>
								<th>Transaction Value SGD</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td><a onClick={props.addTab}><u>Mark</u></a></td>
								<td>IT</td>
								<td>2200</td>
							</tr>
							<tr>
								<td>2</td>
								<td>Jacob</td>
								<td>Administrator</td>
								<td>1340</td>
							</tr>
							<tr>
								<td>3</td>
								<td>Henry</td>
								<td> Administrator</td>
								<td>1500</td>
							</tr>
						</tbody>
					</Table>
				</Col>
				<Col className="paddingLeft-30" md={6}>
					<Pagination />
				</Col>
				<Col md={6}>
					<Button className="pull-right" bsStyle="default">Back To Dashboard</Button>
				</Col>
			</Row>
		</div>
	)
}

export default SplitPoViewMore
