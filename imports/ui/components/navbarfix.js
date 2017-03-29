import React, {Component, PropTypes} from 'react';
// import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import { createContainer } from 'meteor/react-meteor-data';
import { Link, browserHistory } from 'react-router';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, NavDropdown, MenuItem } from 'react-bootstrap';


class Navbarfix extends Component {



  constructor(props){
    super(props);
    this.state={ logout: false};
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  signup(){
    browserHistory.push('/signup');
  }
  login(){
    browserHistory.push('/login');
  }
  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
}
  render() {
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
      return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">The Bible App</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <h1 className="text-center">{ loggedIn ? 'Welcome '+currentUser.username : '' }</h1>
                </li>
                <li>
                  <a href="#" onClick={this.signup}>Signup</a>
                </li>
                <li>
                  <a href="#" onClick={ this.logout}>  Logout</a>
                </li>


                <li>
                  <a href="#" onClick={ this.login}>  Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        )
  }

}
Navbarfix.propTypes = {
  currentUser: PropTypes.object,
};

export default createContainer(() => {
  return {
    currentUser: Meteor.user()
  };
}, Navbarfix);
