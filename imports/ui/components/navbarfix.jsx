import React, { Component } from 'react';
// import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
// import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

// import { Grid, Form, FormControl, Navbar, Glyphicon,
//   Nav, NavItem, Well, Row, Col, Button, NavDropdown, MenuItem } from 'react-bootstrap';

class Navbarfix extends Component {

  constructor(props) {
    super(props);
    this.state= { logout : false };
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  signup() {
    browserHistory.push('/signup');
  }
  login() {
    browserHistory.push('/login');
  }
  logout(e) {
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
}

  render() {

    const currentUser = this.props.currentUser;
    console.log(currentUser, 'currentUser');
    const userDataAvailable = (currentUser !== undefined);
    const loggedIn = (currentUser && userDataAvailable);
    console.log(loggedIn, 'logedin');
      return (
        <div>
          <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand align-middle" href="#">The Bible App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><Link to={'/upload'}>Upload Files</Link></li>

            </ul>
            <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#" onClick={this.signup}>Signup</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.logout}>  Logout</a>
                  </li>
                  <li>
                    <a href="#" onClick={this.login}>  Login</a>
                  </li>
            </ul>
          </div>{/*/.nav-collapse */}
        </div>
      </nav>
        </div>
        )
  }

}
export default Navbarfix;
