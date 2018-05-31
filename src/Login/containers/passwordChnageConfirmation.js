import React, {Component} from 'react'
import PasswordChangeConfirmationComponent from '../components/passwordChnageConfirmation'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class PasswordChangeConfirmation extends Component {
 
  render () {
    return (
      <PasswordChangeConfirmationComponent 
      showPassworChangedmsg = {this.props.showPassworChangedmsg}
      hidePassworChangedConf = {this.props.hidePassworChangedConf}/>
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PasswordChangeConfirmation)
