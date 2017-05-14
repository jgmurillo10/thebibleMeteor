import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import {Link} from 'react-router';
import {CoursesMongo} from "../../../api/programs.js";

class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            code:'',
            error: '',

        };
    }
    goCourses(){
      browserHistory.push('programs/' + this.props.params.programId  +'/courses');
    }

    addCourse() {
      Meteor.call('courses.add', {
      _id : new Mongo.ObjectID(),
       name: this.state.name,
       description: this.state.description,
       url: this.state.url,
       code: this.state.code,
       program_id:new Mongo.ObjectID(this.props.params.programId)

     }, (err, res) => {
       if (err) {
         this.setState({
           error: "Error, no se agrego correctamente la materia. Revise que los campos estén completos."
         });
       } else {
         this.setState({
           error: "Materia " + this.state.name + " agregada correctamente."
         });
       }
     });
    }

    render() {
        return (
          <div className="addPadding">
            <h1>Agregar Materia</h1>
          <form>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="nombre">Nombre:</label>
            <div className="col-sm-10">
              <input required type="text" placeholder="Programación con tecnologías Web" className="form-control" value={this.state.value} onChange={(event) => {
                  this.setState({name: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="description">Descripción:</label>
            <div className="col-sm-10">
              <input required type="text" placeholder="Excelente materia" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">URL de la materia:</label>
            <div className="col-sm-10">
              <input required type="text" placeholder="https://johnguerra.co" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">Código Uniandes:</label>
            <div className="col-sm-10">
              <input required type="text" placeholder="ISIS3710" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({code: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">
                 <button type="button"  className="btn btn-app" data-toggle="modal" data-target="#myModal" onClick={this.addCourse.bind(this)}>
                   Guardar
                 </button>
                <Link className="btn btn-info" to={'/programs/' + this.props.params.programId  +'/courses'}>Cancelar</Link>
              </div>
            </div>
          </div>
          </form>

          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Atención</h4>
                </div>
                <div className="modal-body">
                  <p>{this.state.error}</p>
                </div>
                <div className="modal-footer">
                  <button onClick={this.goCourses.bind(this)}  data-dismiss="modal" className="btn btn-info" >Ver materias</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">Reintentar</button>
                </div>
              </div>
            </div>
          </div>
      </div>

        );
    }
}

export default AddCourse;
