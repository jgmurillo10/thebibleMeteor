import React, {Component} from 'react';
// import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import { Link, browserHistory } from 'react-router';
import { Grid, Form, FormControl, Navbar, Glyphicon,
  Nav, NavItem, Well, Row, Col, Button, NavDropdown, MenuItem } from 'react-bootstrap';


class Navbarfix extends Component {



  constructor(props){
    super(props);
    this.state={ logout: false};
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  login(){
    this.setState({ logout: true });
  }
  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
}
  render() {

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
                  <a href="#" onClick={this.logout}>Signup</a>
                </li>
                <li>
                  <a href="#" onClick={this.logout}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        )
  }

}
export default Navbarfix;
