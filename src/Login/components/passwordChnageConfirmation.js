import React from 'react';
import { Modal, Button } from 'react-bootstrap';


const ForgotPasswordConfirmation = (props) => {

	return (
		<Modal
			onHide={props.hidePassworChangedConf}
			show={props.showPassworChangedmsg}
			bsSize="small"
			aria-labelledby="contained-modal-title-sm"
		>
			<Modal.Header closeButton>
				{/* <span className="fa fa-info-circle fa-2x"></span> */}
				<Modal.Title id="contained-modal-title-sm">System Information</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Your password has been changed successfully! The system will generate a confirmation email to your email address.</p>
				<Button onClick={props.hidePassworChangedConf}>Ok</Button>
			</Modal.Body>
		</Modal>
	)
}

export default ForgotPasswordConfirmation
