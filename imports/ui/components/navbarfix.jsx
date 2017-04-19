import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class Navbarfix extends Component {

  constructor(props) {
    super(props);
    this.state= { logout : false, username: '' };
    this.signup = this.signup.bind(this);
    this.logout = this.logout.bind(this);
    this.login = this.login.bind(this);
  }
  componentWillMount(){
    if (Meteor.user()) {
      console.log('didupdate', Meteor.user().username);
      this.setState({
        username: Meteor.user().username
      });
    }
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

    let cu = Meteor.user();
    let name='';

    const loggedIn = (cu !== null);
    if(loggedIn){
    }
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
            <a className="navbar-brand middle navbar-title" href="#">The Bible App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">

              {!loggedIn?
                  <ul className="nav navbar-nav">
                  <li><a aria-role="button"   data-toggle="collapse" data-target="#navbar"  href="#">Home</a></li>
                  </ul>
                 : ''
              }
              {loggedIn?
            <ul className="nav navbar-nav">
              <li><Link aria-role="button"   data-toggle="collapse" data-target="#navbar"  to={'/upload'}>Upload Files</Link></li>
            </ul>
            : ''
          }
          {!loggedIn?
            <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a  aria-role="button"  data-toggle="collapse" data-target="#navbar"  href="#" onClick={this.signup}>Signup</a>
                  </li>

                  <li>
                    <a aria-role="button"   data-toggle="collapse" data-target="#navbar"  href="#" onClick={this.login}>  Login</a>
                  </li>

            </ul> :''}
          {loggedIn?
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a aria-role="button" data-toggle="collapse" data-target="#navbar"  href="#" onClick={this.logout}>  Logout</a>
              </li>
            </ul>: ''}


          </div>{/*/.nav-collapse */}
        </div>
      </nav>
        </div>
        )
  }

}
export default Navbarfix;
