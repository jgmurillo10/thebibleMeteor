import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

// const ROOT_URL = "http://localhost:3000/api";
import {Link} from 'react-router';
// import Courses from '../courses/courses';


class Program extends Component {

  render(){
    return (
      <div className="col-md-6 col-sm-6 ">
        <div className="card ">
          <div className="card-block">
            <h4 className="card-title">{this.props.program.name}</h4>
            <p className="card-text">{this.props.program.description}</p>
          </div>
          <div className=" text-center">
          <div className=" btn-group">
            {/* <button className="btn btn-danger" onClick={this.deleteProgram.bind(this)} >
             Delete
            </button> */}
            <a href={this.props.program.url} target="_blank" className="btn btn-info cardbtn" aria-label="Program's webpage"><i className="fa fa-fw fa-globe"></i></a>

          <Link className="btn btn-app " aria-label="Program's courses" to={'/programs/' + this.props.program._id + '/courses'}>Courses</Link>
          </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Program;
