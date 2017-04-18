import React, { Component } from 'react';

import { Link } from 'react-router';
import { FilesMongo } from "../../../api/programs.js";
const ROOT_URL = "https://thebibleapp.herokuapp.com";

class AddFullFile extends Component {

  constructor(props){
    super(props);
    this.state = {
        files:[],
        name:'',
        size:'',
        fileurl:'',
        courseid:''
    }
  }
  addFile(){
    let name =this.state.files[0].name;
    let filesize = this.state.files[0].size;
    let fileurl = "https://s3.amazonaws.com/thebibleapp/"+ this.state.files[0].name;
    let courseid = this.props.params.courseId;

    FilesMongo.insert({
      name,
      filesize,
      fileurl,
      courseid
    });
    alert("File " + name + " added");
  }


  uploadFile(file, signedRequest, url){
  var xhr = new XMLHttpRequest();
      console.log("adasd" + this.props.params.courseId);
      // console.log(this.state.file[0].courseId);

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
        return (
          <div className="addPadding">
                <div className="form-horizontal">
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="file">File: </label>
                        <div className="col-sm-8">
                          <input className="btn btn-default btn-file form-control" type="file" id="file-input"  onChange={this.initUpload.bind(this)}/>
                        </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="Program">Program: </label>
                      <div className="col-sm-8">
                        <input type="text" placeholder="Ingeniería Eléctrica" className="form-control" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="control-label col-sm-2" htmlFor="Course">Course: </label>
                      <div className="col-sm-8">
                        <input type="text" placeholder="Redes" className="form-control" />
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
export default AddFullFile;
