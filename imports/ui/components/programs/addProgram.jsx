import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { ProgramsMongo } from "../../../api/programs.js";
import { ModalAlert } from "../modal/ModalAlert.jsx";


class AddProgram extends Component{

  constructor(props) {
   super(props);
   this.state = {
     programs:[],
     name: '',
     description: '',
     url: '',
     error: '',
   };

 }
 goPrograms(){
   browserHistory.push('/programs');
 }
 addProgram(event) {
    event.preventDefault();


  Meteor.call('programs.add', {
   name: this.state.name,
   description: this.state.description,
   url: this.state.url

 }, (err, res) => {
   if (err) {
     this.setState({
       error: "Error, no se agrego correctamente el programa. Revise que los campos estén completos."
     });
   } else {
     this.setState({
       error: "Programa " + this.state.name + " agregado correctamente."
     });


   }
   console.log(this.state.error);
 });

 }


render() {
    return (
          <div className="addPadding">
            <h1>Agregar Programa</h1>
          <div className="form-horizontal">
              <div className="form-group">
              <label className="control-label col-sm-2" htmlFor="nombre">Nombre:</label>
                <div className="col-sm-10">
                  <input type="text" placeholder="Ingeniería Eléctrica" className="form-control" value={this.state.value} onChange={(event) => {
                      this.setState({name: event.target.value})
                  }} />
                </div>
              </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="description">Descripción:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="SNIES: xxx programa de 8 semestres..." className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">Link del programa:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="https://url.uniandes.edu.co" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">

                  <button type="button"  className="btn btn-app" data-toggle="modal" data-target="#myModal" onClick={this.addProgram.bind(this)}>
                    Guardar
                  </button>
                  <Link className="btn btn-info" to={'/programs' }>Cancelar</Link>
              </div>
            </div>
          </div>

      </div>

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
              <button onClick={this.goPrograms.bind(this)}  data-dismiss="modal" className="btn btn-info" >Ver programas</button>
              <button type="button" className="btn btn-default" data-dismiss="modal">Atrás</button>
            </div>
          </div>
        </div>
      </div>


      </div>



    );
  }
}

export default AddProgram;
