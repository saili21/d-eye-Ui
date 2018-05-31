import React, { Component } from 'react'
import LoginComponent from '../components'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActionCreator from '../../common/actions/auth';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emailId: '',
      password: '',
      firstTimeLogin: false,
      forgotPassword: false,
      // showLogin : false
    }
  }


  onLogin = () => {
    this.props.authActions.setLoggedIn()
    // localStorage.clear();
  }

  onChangeField = (inputName, value) => {
    let data = Object.assign({}, this.state);
    data[inputName] = value;

    this.setState(data);
    console.log(this.state,data);
  }

  // showLogin = () => {
  //   this.setState({
  //     showLogin : true
  //   })
  // }

  // hideLogin = () => {
  //   this.setState({
  //     showLogin : false
  //   })
  // }

  showFirstTimeLogin = () => {
    this.setState({
      firstTimeLogin: true
    })
  }

  hideFirstTimeLogin = () => {
    this.setState({
      firstTimeLogin: false
    })
  }

  showForgotPassword = () => {
    this.setState({
      forgotPassword :  true
    })
  }

  hideForgotPassword = () => {
    this.setState({
      forgotPassword : false
    })
  }

  render() {
    return (
      <LoginComponent 
        data = {this.state}
        showFirstTimeLogin = {this.showFirstTimeLogin}
        hideFirstTimeLogin = {this.hideFirstTimeLogin}
        showForgotPassword = {this.showForgotPassword}
        hideForgotPassword = {this.hideForgotPassword}
        // showLogin = {this.showLogin}
        // hideLogin = {this.hideLogin}
        onChangeField = {this.onChangeField}
        onLogin = {this.onLogin} />
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
  'authActions': bindActionCreators(authActionCreator, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
