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

import App from '../imports/ui/components/App.jsx';
/* En general la pagina esta completa, tiene las funcionalidades adecuadas e implementa seguridad con usuarios. Por otro lado,
la usabilidad tiene algunos puntos de mejora. Es aconsejable usar mas de una fuente para diferenciar titulos y palabras clave, 
asi como para brindar estetica. Font pair recomienda pares de Google-Fonts. Ademas, la pagina podria usar quizas algun color 
más, o de pronto un color que se utilice para ser más llamativo para dar navegabilidad mas facil. Por ejemplo con los iconos 
de font-awesome se pueden poner de diferentes colores o algo por el estilo. 
*/
Meteor.startup(() => {
  render(
    <Router history={browserHistory} >
    <Route path='/' component={App}>
      <IndexRoute component={Home}/>
      {/* <Route path='intro' component={Intro}/> */}
      <Route path="login" component={LoginPage}/>
      <Route path="signup" component={SignupPage}/>
      <Route path='programs' component={Programs}/>
      <Route path='programs/:programId/courses' component={Courses}/>
      <Route path='programs/:programId/courses/:courseId/files' component={Files}/>
      <Route path='programs/:programId/courses/:courseId' component={AddFile}/>
      <Route path='programs/add' component={AddProgram}/>
      <Route path='programs/:programId/addCourse' component={AddCourse}/>

    </Route>
  </Router>,
     document.getElementById('render-target')
    );
});
