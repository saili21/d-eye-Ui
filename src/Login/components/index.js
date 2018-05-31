import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import FirstTimeLogin from '../containers/firstTimeLogin';
import ForgotPassword from '../containers/forgotPassword';
import NavBar from '../../Navbar/containers/navBar';

const Login = (props) => {
  let showComponent = null;

  let LoginComp = (<div className="col-sm-4 col-sm-offset-4" style={{ marginTop: '5%' }}>
    <div className="panel panel-default">
      <div className="panel-body">
        <div className="form-group">
          <a className="close" onClick={props.hideLogin}>&times;</a>
          <h2 className="modal-title">Welcome {props.isShowFirstTimeLogin}</h2>
          <br className="clear" />
          <form>
            <div className="form-group">
              <label>Company Email Address:</label>
              <input type="email" value={props.data.emailId} 
              onChange={e => props.onChangeField('emailId', e.target.value)} className="form-control" id="email" />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input type="password" value={props.data.password}
              onChange={e => props.onChangeField('password', e.target.value)} className="form-control" id="new" />
            </div>
            <div className="form-group">
              <a onClick={props.onLogin } className="btn btn-success btn-block">LOGIN</a>
            </div>
            <a onClick={props.showFirstTimeLogin}>First time login?</a>
            <dd><a onClick={props.showForgotPassword}>Forgot Password?</a></dd>
          </form>
        </div>
      </div>
    </div>
  </div>)

  if (props.data.firstTimeLogin) {
    showComponent = <FirstTimeLogin hideFirstTimeLogin={props.hideFirstTimeLogin} />
  } else if(props.data.forgotPassword) {
    showComponent = <ForgotPassword hideForgotPassword = {props.hideForgotPassword} />
  } else {
    showComponent = LoginComp;
  }
  
  // else if(props.data.showLogin) {
  //   showComponent = LoginComp
  // }

  return (
    <div>
      <NavBar showLogin = {props.showLogin}/>
      {showComponent}
    </div>
  )
}

export default withRouter(Login)
