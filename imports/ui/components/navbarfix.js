import React, {Component} from 'react';
// import {Nav,Navbar,NavItem} from 'react-bootstrap/lib/';
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router';
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
  logout(){
    this.setState({ logout: false });
  }
  render() {

      return (
        <div>
          <nav className="navbar navbar-default navbar-static-top">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">The Bible App</a>
            </div>
            <div className="navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <a href="#" onClick={this.logout}>Signin</a>
                </li>
                <li>
                  <a href="#" onClick={this.logout}>Login</a>
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
