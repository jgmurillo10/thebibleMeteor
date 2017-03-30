import React, {Component} from "react";
import {Meteor} from "meteor/meteor";

// const ROOT_URL = "http://localhost:3000/api";
import {Link} from 'react-router';
// import Courses from '../courses/courses';

/*Seria bueno poner un title o un tag mas facil de entender para el boton que redirige a la pagina del depto para guiarse mas facil.
Esto mismo para cada clase del programa, de resto todo esta muy bien en cuanto a usabilidad. Iba a sugerir cambiar la descripcion 
para poner en negrilla valores como SNIES.. etc, pero veo que es una sola descripcion por programa en la base de datos y queda complicado.
*/
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
            
            <a href={this.props.program.url} target="_blank" className="btn btn-info cardbtn"><i className="fa fa-fw fa-globe"></i></a>

            <Link className="btn btn-primary " to={'/programs/' + this.props.program._id + '/courses'}>Courses</Link>
          </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Program;
