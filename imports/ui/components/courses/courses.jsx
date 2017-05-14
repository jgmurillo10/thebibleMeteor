import React, {Component} from 'react';
import Course from './course';
import {Link} from 'react-router';
import {createContainer} from "meteor/react-meteor-data";
import {CoursesMongo} from "../../../api/programs.js";
import {ProgramsMongo} from "../../../api/programs.js";

class Courses extends Component {

  constructor(props) {
          super(props);

          this.state = {
              courses: [],
              name: '',
              description: '',
              url: '',
              _id:'',
              program_id:'',
              program_name:'',
          }

      }
      getName() {
        Meteor.call('programs.getName', {
         program_id:new Mongo.ObjectID(this.props.params.programId)

       }, (err, res) => {
         if (err) {
           console.log(err);
           this.setState({
             program_name: err
           });
         } else {
           console.log(res);
           this.setState({
             program_name: res
           });
         }
       });
      }


      render() {
        console.log();
        return (
            <div className="container-fluid">

              <h1>Materias de {this.state.program_name} </h1>
              <hr />

              <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programas</Link>
                    </li>
                    <li className="active">
                      Materias
                    </li>
                  </ol>
                </div>
              </div>

               <Link className="btn" to={'/programs/' + this.props.params.programId + '/addCourse' }>
                 <span id='add'><h3 className="add">  <i className='fa fa-plus fa-2x btn'></i>Agregar Materia</h3></span>
              </Link>
              <Link className="btn" to={'/programs/'}>
                <span id='add'><h3 className="add">  <i className='fa fa-mail-reply fa-2x btn'></i>Atrás</h3></span>
             </Link>


              <div className="row">
              {/* {console.log(this.props.courses)} */}
                    {this.props.courses.map(course => {
                        return <Course key={course._id} course={course}/>
                    })}

              </div>
            </div>
          )
  }
}
// export default Courses;
export default AppContainer = createContainer(({params})=>{
  let courses = CoursesMongo.find({program_id: new Mongo.ObjectID(params.programId)});

	return {
		courses:courses.fetch()
	};
}, Courses);
