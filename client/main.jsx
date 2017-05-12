import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router,Route,Link, browserHistory, IndexRoute} from 'react-router';

import Home from '../imports/ui/components/home.jsx';
import Programs from '../imports/ui/components/programs/Programs.jsx';
import AddProgram from '../imports/ui/components/programs/addProgram';
import Courses from '../imports/ui/components/courses/courses';
import AddCourse from '../imports/ui/components/courses/addCourse';
import Files from '../imports/ui/components/files/files';
import AddFile from '../imports/ui/components/files/addFile';
import LoginPage from '../imports/ui/components/auth/LoginPage';
import SignupPage from '../imports/ui/components/auth/SignupPage';
import AddFullFile from '../imports/ui/components/files/addFullFile';
import App from '../imports/ui/components/App.jsx';

import 'http://fonts.googleapis.com/css?family=Raleway:100,600';
import 'http://fonts.googleapis.com/css?family=Open+Sans:300';
import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';
import 'https://fonts.googleapis.com/css?family=Lato|Roboto';

import './main.css';
// import 'assets/js/jquery.min.js';
// import 'assets/css/hallooou.css';
// import 'assets/css/colors.css';
// import 'assets/css/colors_2.css';
// import 'assets/css/colors_3.css'
// import 'assets/css/colors_4.css';
// import 'assets/css/plugins/owl.carousel.css';
// import 'assets/css/plugins/owl.theme.css';
// import 'assets/css/plugins/owl.transitions.css';
// import 'assets/css/plugins/animate.css';
// import 'assets/css/plugins/magnific-popup.css';
// import 'assets/css/plugins/jquery.mb.YTPlayer.min.css';
import 'assets/css/font-awesome.min.css';


import 'assets/js/bootstrap.min.js';


// import 'assets/js/plugins/wow.min.js';
// import 'assets/js/plugins/owl.carousel.min.js';
// import 'assets/js/plugins/jquery.parallax-1.1.3.js';
// import 'assets/js/plugins/jquery.magnific-popup.min.js';
// import 'assets/js/plugins/jquery.mb.YTPlayer.min.js';
// import 'assets/js/plugins/jquery.countTo.js';
// import 'assets/js/plugins/jquery.inview.min.js';
// import 'assets/js/plugins/pace.min.js';
// import 'assets/js/plugins/jquery.easing.min.js';
// import 'assets/js/plugins/jquery.validate.min.js';
//mport 'assets/js/plugins/additional-methods.min.js';
//import 'assets/js/hallooou.js';
import 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBoVKfEihX__NdMwdDysA6Vve6PE9Ierj4';

Meteor.startup(() => {
   $('html').attr('lang', 'es');


  render(
    <Router history={ browserHistory } >
    <Route path='/' component={ App }>
      <IndexRoute component={ Home }/>
      {/* <Route path='intro' component={Intro}/> */}
      <Route path="login" component={ LoginPage }/>
      <Route path="signup" component={ SignupPage }/>
      <Route path='programs' component={ Programs }/>
      <Route path='upload' component={ AddFullFile }/>
      <Route path='programs/:programId/courses' component={ Courses }/>
      <Route path='programs/:programId/courses/:courseId/files' component={ Files }/>
      <Route path='programs/:programId/courses/:courseId' component={ AddFile }/>
      <Route path='programs/add' component={ AddProgram }/>
      <Route path='programs/:programId/addCourse' component={ AddCourse }/>

    </Route>
  </Router>,
     document.getElementById('render-target')
    );
});
