import React, {Component} from 'react'
import NavbarComponent from '../components/navBar'
import { Route , withRouter} from 'react-router-dom';

class NavBar extends Component {

  render () {
    return (
      <NavbarComponent showLogin = {this.props.showLogin} />
    )
  }
}


export default withRouter(NavBar)
