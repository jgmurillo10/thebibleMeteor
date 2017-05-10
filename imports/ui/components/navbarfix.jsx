import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
class Navbarfix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      log: '',
    };
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
  login(x) {
    this.setState({ log: x });
  }
  logout() {
    Meteor.logout();
    browserHistory.push('/');
  }


  render() {
    let bar;
    const logged = Meteor.user();
    console.log(logged);

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

              {logged?
                <ul className="nav navbar-nav">
                  <li><Link role="button"   data-toggle="collapse" data-target="#navbar"  to={'/upload'}>Upload Files</Link></li>
                </ul>

                 :
                 <ul className="nav navbar-nav">
                 <li><a role="button"   data-toggle="collapse" data-target="#navbar"  href="#">Home</a></li>
                 </ul>
              }
          {logged?
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a role="button" data-toggle="collapse" data-target="#navbar"  href="#" onClick={() => { this.logout(); }}>  Logout</a>
              </li>
            </ul>
             :
             <ul className="nav navbar-nav navbar-right">
                   <li>
                     <Link to={'/signup'}  role="button"  data-toggle="collapse" data-target="#navbar"  href="#" onClick={this.signup}>Signup</Link>
                   </li>

                   <li>
                     <Link to={'/login'} role="button"   data-toggle="collapse" data-target="#navbar"  href="#">  Login</Link>
                   </li>

             </ul>
           }



          </div>{/*/.nav-collapse */}
        </div>
      </nav>
        </div>
        )
  }

}
export default createContainer(() => {
  return { currentUser: Meteor.user() };
}, Navbarfix);
