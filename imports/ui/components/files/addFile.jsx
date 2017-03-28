import React, {Component} from 'react';

import {Link} from 'react-router';
import {FilesMongo} from "../../../api/programs.js";

const ROOT_URL = "https://thebibleapp.herokuapp.com";

class AddFile extends Component {

  constructor(props) {
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
      <div>
            <h1>Add file</h1>
            <hr />
            <input className="btn btn-default btn-file form-control" type="file" id="file-input"  onChange={this.initUpload.bind(this)}/>

            <div className="text-center">
            <div className="btn-group">
              <button className="btn btn-success " onClick={this.addFile.bind(this)}>Save</button>
              <Link className="btn btn-primary " to={'/programs/' + this.props.params.programId + '/courses/' +this.props.params.courseId + '/files' }>Go Back</Link>
            </div>
            </div>

        </div>
    )
  }


}
export default AddFile;
