import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PasswordChangeConfirmation from '../containers/passwordChnageConfirmation'

const FirstTimeLogin = (props) => {
  return (
    <div>
      <div className="col-sm-4 col-sm-offset-4" style={{ marginTop: '5%' }}>
        <div className="panel panel-default">
          <div className="panel-body">
            <a onClick={props.hideFirstTimeLogin} className="close">&times;</a>
            <h1>Welcome</h1>
            <form>
              <div className="form-group">
                <label>Please enter your default password:</label>
                <input type="password" className="form-control" id="" />
              </div>
              <div className="form-group">
                <label>New Password:</label>
                <input type="password" className="form-control" id="new" />
              </div>
              <div className="form-group">
                <label>Confirm New Password:</label>
                <input type="password" className="form-control" id="confirm" />
              </div>
              <div className="form-group">
                <button type="button" className="btn btn-success btn-block" onClick={props.showPasswordChangeConf}>CHANGE PASSWORD</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <PasswordChangeConfirmation
      showPassworChangedmsg = {props.showPassworChangedmsg}
      hidePassworChangedConf = {props.hidePassworChangedConf}/>
    </div>
  )
}

export default withRouter(FirstTimeLogin)
