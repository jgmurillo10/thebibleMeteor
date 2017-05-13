import React, {Component} from 'react';
import {Link} from 'react-router';

class File extends Component {

  render(){
    return (
      <div className="card  card-app  col-md-4 col-xs-12 col-sm-4">
        <div className="">

          <div className="card-block">

            <h4 className="card-title file-title">{this.props.file.name}</h4>
          </div>
          <div className="text-center">
            <a href={this.props.file.drive_url} className="btn btn-app " target='_blank'>
            <i className="fa fa-fw fa-download"></i>
            Descargar
            </a>

          </div>
          {/* <button onClick={this.borrarEstudiante.bind(this)}>Borrar</button> */}
        </div>

      </div>
    )
  }
}
export default File;
