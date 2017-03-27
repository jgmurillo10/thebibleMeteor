import React, {Component} from 'react';
import {Link} from 'react-router';

class File extends Component {

  render(){
    return (
      <div className="col-md-6 col-sm-6">
        <div className="card">
          <div className="card-block">
            <h4 className="card-title">{this.props.file.name}</h4>
          </div>
          <div className="text-center">
            <a href={this.props.file.drive_url} className="btn btn-primary " target='_blank'>
            <i className="fa fa-fw fa-download"></i>
            Download
            </a>

          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
        </div>

      </div>
    )
  }
}
export default File;
