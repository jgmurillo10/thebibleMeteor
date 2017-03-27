import React, {Component} from 'react';
import Course from './course';
import {Link} from 'react-router';
import {createContainer} from "meteor/react-meteor-data";
import {CoursesMongo} from "../../../api/programs.js";

class Courses extends Component {
    constructor(props) {
        super(props);

        this.state = {
            courses: [],
            name: '',
            description: '',
            url: '',
            _id:'',
            program_id:''
        }
    }
    render() {

        return (
            <div className="container-fluid">

              <h1>Courses</h1>
              <hr />

              <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programs</Link>
                    </li>
                    <li className="active">
                      Courses
                    </li>
                  </ol>
                </div>
              </div>

               <Link className="btn" to={'/programs/' + this.props.params.programId + '/addCourse' }>
                <i className="fa fa-plus fa-2x btn">
                  <span id="add">Add Course</span>
                </i>
              </Link>

              <div className="row">

                    {this.state.courses.map(course => {
                        return <Course key={course._id} course={course}/>
                    })}

              </div>
            </div>
          )
}
}

export default AppContainer = createContainer(()=>{
	let courses = CoursesMongo.find({});
  console.log(courses.fetch());
	return {
		courses:courses.fetch()
	};
}, Courses);
