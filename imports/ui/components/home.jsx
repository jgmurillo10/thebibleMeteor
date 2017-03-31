import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {

    render() {

        return (

          <div className="container-fluid add">
          <div className="background-lib"></div>
          <div className="text-center"><i className="fa fa-fw fa-4x fa-book"></i></div>
        <h1 className="text-center">Welcome</h1>
        <hr />
        <div className="row">
          <div className="col-md-offset-2 col-md-8 text-justified">
          <h3>This is the bible app. </h3>
          <p>This project is a web application designed to storage academic files. The files are organized by program and course from Universidad de los Andes.</p>
          <p>The bible app allow the users create or delete an Undergraduate Program, create a Course and upload a file of any type (pdf's, png's, zip's, etc). </p>
            <p>Also, the user can download any of the files listed by the app.</p>
            <p>Note: avoid uploading sensitive files. These files are stored in Amazon S3</p>

            <p>Click Sign up button below to signup or login if you have an account.</p>
          </div>
        </div>

          <div className="row text-center col-md-offset-2">
          <Link className="" to={'/signup' }>
            <i className="fa fa-sign-in fa-2x btn text-center black">
              <span id="add">Sign up</span>
            </i>
          </Link>
          </div>
      </div>



          )
    }
}

export default Home;
