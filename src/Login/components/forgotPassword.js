import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const ForgotPassword = (props) => {
	return (
		<div className="col-sm-4 col-sm-offset-4" style={{ marginTop: '5%' }}>
			<div className="panel panel-default">
				<div className="panel-body">
					<a onClick={props.hideForgotPassword} className="close">&times;</a>
					<h3 className="modal-title text-center">
						<span className="fa fa-info-circle fa-2x"></span>
						<span className="text-forgot">System Information</span>
					</h3>
					<br className="clear" />
					<p>We can help you reset your password using the</p>
					<p>corportate email address linked to your account.</p>
					<form>
						<div className="form-group">
							<label></label>
							<input type="text" className="form-control" placeholder="Stewardtang@senseinfosys.com"/>
						</div>
						<div className="form-group">
							<button type="button" className="btn btn-success btn-block">SUBMIT</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default withRouter(ForgotPassword)
