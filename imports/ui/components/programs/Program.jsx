import React, {Component} from "react";
import {Meteor} from "meteor/meteor";
import {Link} from 'react-router';


class Program extends Component {

  render(){
    return (
      <div className="col-md-4 col-sm-4 ">
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

            <Link className="btn btn-app" aria-label="Program's courses" to={'/programs/' + this.props.program._id + '/courses'}>Materias</Link>

          </div>
          </div>
        </div>
      </div>


    );
  }
}

export default Program;
