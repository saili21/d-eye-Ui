import React from 'react';
import '../../assets/css/complianceMonitoringDashboard.css';
import MultiSelect from '../../common/components/MultiselectDropdown';
// import Multiselect from 'react-bootstrap-multiselect';
const ComplianceMonitoringDashboard = (props) => {
	return (
		<div className="col-md-8 col-lg-6 col-sx-12 offset">
			<div className="col-sx-12">
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-bottom-20">
					<h3>Select Client</h3>
				</div>
			</div>
			<div className="col-sx-12 align-style">
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-bottom-20">
					<label>Users to be monitured</label>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 position-relative">
					<MultiSelect />
					{/* <form>
						<div className="form-group">
							<input type='text' className="form-control" />
						</div>
					</form> */}
				</div>
			</div>
			<div className="col-sx-12 align-style">
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-bottom-20">
					<label>Pre Defined Cycle:</label>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 position-relative  marginTop-20">
					<form>
						<div className="form-group">
							<div className="pre-defined-cycle">
								<div>P2P</div>
								<div>Marketing</div>
							</div>
						</div>
						<div className="over-text">Client A</div>
					</form>
				</div>
			</div>
			<div className="col-sx-12 align-style">
				<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 padding-bottom-20">
					<label>Pre Defined Cycle:</label>
				</div>
				<div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 position-relative">
					<form>
						<div className="form-group">
							<div className="pre-defined-cycle">
								<div>P2P</div>
								<div>Marketing</div>
							</div>
						</div>
						<div className="over-text">Client D</div>
					</form>
				</div>
			</div>
			<div className="col-md-12">
				<button className="btn btn-primary" onClick={props.goToClients}> Next </button>
			</div>
		</div>
	)
}

export default ComplianceMonitoringDashboard
