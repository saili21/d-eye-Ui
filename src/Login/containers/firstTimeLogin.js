import React, {Component} from 'react'
import FirstTimeLoginComponent from '../components/firstTimeLogin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class FirstTimeLogin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showPassworChangedmsg: false
    }
  }

  showPasswordChangeConf = () => {
    this.setState({
      showPassworChangedmsg : true
    })
  }

  hidePassworChangedConf = () => {
    this.setState({
      showPassworChangedmsg : false
    })
  }
 
  render () {
    return (
      <FirstTimeLoginComponent 
      showPassworChangedmsg = {this.state.showPassworChangedmsg}
      hidePassworChangedConf = {this.hidePassworChangedConf}
      showPasswordChangeConf = {this.showPasswordChangeConf}
      hideFirstTimeLogin = {this.props.hideFirstTimeLogin}/>
    )
  }
}
const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(FirstTimeLogin)
