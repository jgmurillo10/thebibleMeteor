import React, {Component} from 'react';

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

        };
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
         alert(err);
       } else {
         alert("Course " + this.state.name + " added");
       }
     });
    }

    render() {
        return (
          <div className="add">
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="nombre">Name:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Programación con tecnologías Web" className="form-control" value={this.state.value} onChange={(event) => {
                  this.setState({name: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="description">Description:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="Excelente materia" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({description: event.target.value})
              }} />
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">URL:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="https://johnguerra.co" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({url: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="url">Code:</label>
            <div className="col-sm-10">
              <input type="text" placeholder="ISIS3710" className="form-control"  value={this.state.value} onChange={(event) => {
                  this.setState({code: event.target.value})
              }}/>
            </div>
          </div>
          <div className="form-group">
             <div className="col-sm-offset-2 col-sm-10">
               <div className="btn-group">
                  <button className="btn btn-app" onClick={this.addCourse.bind(this)}>Save</button>
                <Link className="btn btn-primary" to={'/programs/' + this.props.params.programId  +'/courses'}>Go Back</Link>
              </div>
            </div>
          </div>
      </div>

        );
    }
}

export default AddCourse;
