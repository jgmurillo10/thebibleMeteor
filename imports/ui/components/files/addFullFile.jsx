import React, { Component } from 'react';

import { Link } from 'react-router';
import { FilesMongo } from "../../../api/programs.js";
import { createContainer } from 'meteor/react-meteor-data';
import { ProgramsMongo } from "../../../api/programs.js";
import { CoursesMongo } from "../../../api/programs.js";

const ROOT_URL = "https://thebibleapp.herokuapp.com";

class AddFullFile extends Component {

  constructor(props){
    super(props);
    this.state = {
        files:[],
        name:'',
        size:'',
        fileurl:'',
        courseid:'',
        programid: '',
        programs: props.programs,
        courses: props.courses
    }
    this.handleChangeProgram = this.handleChangeProgram.bind(this);
    this.handleChangeCourse = this.handleChangeCourse.bind(this);
  }
  handleChangeProgram(e){
    this.setState({programid:e.target.value}, ()=>{
          console.log(this.state.programid, 'STATEEEE');

    })



  }
  handleChangeCourse(e){
    this.setState({courseid:e.target.value});
    console.log(this.state, 'STATEEEE');


  }
  filterCourses(){
    let filterCourses = this
  }
  addFile(){
    event.preventDefault();
    Meteor.call('files.add', {
      name: this.state.files[0].name,
      size: this.state.files[0].size,
      course_id: this.state.courseid,
      drive_url:  "https://s3.amazonaws.com/thebibleapp/"+ this.state.files[0].name
    },(err,res)=>{
      if(err){
        alert(err);
      }else{
        alert("File "+ this.state.files[0].name + " added");
      }
    });



  }


  uploadFile(file, signedRequest, url){
  var xhr = new XMLHttpRequest();
  xhr.open('PUT', signedRequest);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === 4){
      if(xhr.status === 200){
        console.log('entro gonorrea ome gonorrea');
        {/*document.getElementById('preview').src = url;*/}
        //document.getElementById('avatar-url').value = url;
        // document.getElementById('file-url').value=url;
      }
      else{
        alert('Could not upload file.');
      }
    }
  };
  xhr.send(file);
  }


  getSignedRequest(file){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ROOT_URL + '/sign-s3?file-name='+file.name +'&file-type=' + file.type);
    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          const response = JSON.parse(xhr.responseText);
          console.log(response);

          this.uploadFile(file, response.signedRequest, response.url);

        }
        else{
          alert('Could not get signed URL.');
        }
      }
    };
    xhr.send();
    }

      initUpload(event){
        this.setState({files: event.target.files}) ;
        const file =  event.target.files[0];

        console.log(event.target.files[0]);
        if(file == null){
          return alert('No file selected.');
        }
        this.getSignedRequest(file);
    }


      render(){
        const isProgram = false;
        return (
          <div className="addPadding">
                <div className="form-horizontal">

                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="Program">Program: </label>
                      <div className="col-sm-8">

                          <select className="form-control" value={this.state.selectValue} onChange={this.handleChangeProgram.bind(this)}>
                          {this.props.programs.map(program => {
                            return <option value={program._id} key={program._id} >{program.name}</option>
                          })}
                          </select>


                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="Course">Course: </label>
                      <div className="col-sm-8">
                        <select className="form-control" value={this.state.selectValue} onChange={this.handleChangeCourse.bind(this)} >

                          {this.props.courses.map(course => {
                            return <option value={course._id} key={course._id} >{course.name}</option>
                          })}

                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="file">File: </label>
                        <div className="col-sm-8">
                          <input className="btn btn-default btn-file form-control" type="file" id="file-input"  onChange={this.initUpload.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group">
                      <div className="col-sm-offset-2 col-sm-10">
                        <div className="btn-group">
                          <button className="btn btn-app " onClick={this.addFile.bind(this)}>Save</button>
                          <Link className="btn btn-info " to={'/programs' }>Go Back</Link>


                        </div>
                      </div>
                    </div>
                </div>

            </div>
        )
      }




}
export default AppContainer =createContainer(() =>{
  let programs = ProgramsMongo.find({});
  let courses  = CoursesMongo.find({})
  return {programs: programs.fetch(), courses: courses.fetch()};
}, AddFullFile);
