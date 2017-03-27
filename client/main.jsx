import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import {Router,Route,Link, hashHistory, IndexRoute} from 'react-router';

import Home from '../imports/ui/components/home.jsx';
import Programs from '../imports/ui/components/programs/Programs.jsx';
import AddProgram from '../imports/ui/components/programs/addProgram';
import Courses from '../imports/ui/components/courses/courses';
import AddCourse from '../imports/ui/components/courses/addCourse';

import App from '../imports/ui/components/App.jsx';

Meteor.startup(() => {
  render(
    <Router history={hashHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      {/* <Route path='intro' component={Intro}/> */}
      <Route path='programs' component={Programs}/>
      <Route path='programs/:programId/courses' component={Courses}/>
      {/* <Route path='programs/:programId/courses/:courseId/files' component={Files}/> */}
      {/* <Route path='programs/:programId/courses/:courseId' component={AddFile}/> */}
      <Route path='programs/add' component={AddProgram}/>
    <Route path='programs/:programId/addCourse' component={AddCourse}/>

    </Route>
  </Router>,
     document.getElementById('render-target')
    );
});
