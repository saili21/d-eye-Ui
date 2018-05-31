import React, {Component} from 'react'
import ForgotPasswordComponent from '../components/forgotPassword'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class ForgotPassword extends Component {
 
  render () {
    return (
      <ForgotPasswordComponent hideForgotPassword = {this.props.hideForgotPassword}/>
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)
