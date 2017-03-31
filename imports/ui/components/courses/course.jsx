import React, {Component} from 'react';
import {Link} from 'react-router';



class Course extends Component {

  render(){
    return (
      <div className=" col-md-4 col-xs-12 col-sm-6">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.course.name}</h4>
          <p className="card-text">{this.props.course.description}</p>

          </div>
          <div className="text-center">
          <div className=" btn-group">
          <a href={this.props.course.url} target="_blank" className="btn btn-info cardbtn" aria-label="Course's webpage"><i className="fa fa-fw fa-globe"></i></a>
            <Link className="btn btn-app" to={'/programs/' + this.props.course.program_id + '/courses/' +this.props.course._id + '/files' }>See files</Link>

          </div>
          {/* <button onClick={this.borrarCourse.bind(this)}>Borrar</button> */}
         </div>
         </div>

      </div>


    );
  }
}

export default Course;
