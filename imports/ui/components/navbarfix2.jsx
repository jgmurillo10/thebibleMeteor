import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
import '/imports/assets/js/jquery.min.js';
import '/imports/assets/css/hallooou.css';
import '/imports/assets/css/colors.css';
import '/imports/assets/css/colors_2.css';
import '/imports/assets/css/colors_3.css'
import '/imports/assets/css/colors_4.css';
import '/imports/assets/css/plugins/owl.carousel.css';
import '/imports/assets/css/plugins/owl.theme.css';
import '/imports/assets/css/plugins/owl.transitions.css';
import '/imports/assets/css/plugins/animate.css';
import '/imports/assets/css/plugins/magnific-popup.css';
import '/imports/assets/css/plugins/jquery.mb.YTPlayer.min.css';
import '/imports/assets/css/font-awesome.min.css';


import '/imports/assets/js/bootstrap.min.js';


import '/imports/assets/js/plugins/wow.min.js';
import '/imports/assets/js/plugins/owl.carousel.min.js';
import '/imports/assets/js/plugins/jquery.parallax-1.1.3.js';
import '/imports/assets/js/plugins/jquery.magnific-popup.min.js';
import '/imports/assets/js/plugins/jquery.mb.YTPlayer.min.js';
import '/imports/assets/js/plugins/jquery.countTo.js';
import '/imports/assets/js/plugins/jquery.inview.min.js';
import '/imports/assets/js/plugins/pace.min.js';
import '/imports/assets/js/plugins/jquery.easing.min.js';
import '/imports/assets/js/plugins/jquery.validate.min.js';
import '/imports/assets/js/plugins/additional-methods.min.js';
import '/imports/assets/js/hallooou.js';
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
          <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
              <div className="container">
                  <div className="navbar-header pull-left">
                      <a className="navbar-brand page-scroll" href="#page-top">

                          <span className="brand-logo"></span>
                      </a>
                  </div>
                  <div className="main-nav pull-right">
                      
                  </div>
                  <div className="overlay" id="overlay">
                      <nav className="overlay-menu">
                          <ul>
                              <li><a href="#about">About us</a></li>
                              <li><a href="#services">What we do</a></li>
                              <li><a href="#products">Why choose us</a></li>
                              <li><a href="#team">Our Team</a></li>
                              <li><a href="#portfolio">Portfolio</a></li>
                              <li><a href="#clients">Our clients</a></li>
                              <li><a href="#contact">Contact us</a></li>
                          </ul>
                      </nav>
                  </div>
              </div>
          </nav>
        </div>
        )
  }

}
export default createContainer(() => {
  return { currentUser: Meteor.user() };
}, Navbarfix);
