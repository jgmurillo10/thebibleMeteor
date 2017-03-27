import React, {Component} from 'react';

import {Link} from 'react-router';


class AddCourse extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: '',
            code:''
        };
        //  this.addProgram = this.h.bind(this);
    }

    addCourse() {
        console.log("course added");
    }

    render() {
        return (
          <div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="nombre">Name:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Programación con tecnologías Web" className="form-control" value={this.state.value} onChange={(event) => {
                  this.setState({name: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="description">Description:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Excelente materia" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="url">URL:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="https://johnguerra.co" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" for="url">Code:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="ISIS3710" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({code: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">
                  <button className="btn btn-success" onClick={this.addCourse.bind(this)}>Save</button>
                <Link className="btn btn-primary" to={'/programs/' + this.props.params.programId  +'/courses'}>Go Back</Link>
              </div>
            </div>
          </div>
      </div>

        );
    }
}

export default AddCourse;
