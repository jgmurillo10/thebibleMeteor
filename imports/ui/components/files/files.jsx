import React, {Component, PropTypes} from "react";
import File from "./file";
import {Meteor} from "meteor/meteor";
import {createContainer} from "meteor/react-meteor-data";
import {FilesMongo} from "../../../api/programs.js";
import {Link} from 'react-router';

class Files extends Component {

  render(){
    return (
      <div className="container-fluid">
              <h1>Files</h1>
              <hr />
            <div className="row">
                <div className="col-sm-12">
                  <ol className="breadcrumb">
                    <li>
                      <Link className="" to={'/programs' }>Programs</Link>
                    </li>
                    <li className="">
                      <Link className="" to={'/programs/' + this.props.params.programId + '/courses'}>Courses</Link>
                    </li>
                    <li className="active">
                      Files
                    </li>
                  </ol>
                </div>
              </div>

            <Link className="btn" to={'/programs/' + this.props.params.programId + '/courses/' +this.props.params.courseId }>
              <span id='add'><h3>  <i className='fa fa-plus fa-2x btn'></i>Add File</h3></span>

            </Link>

            <div className="row">

                    {this.props.files.map(file => {
                        return <File key={file._id} file={file}/>
                    })}

              </div>
            </div>
    )
  }
}
// export default Files;
export default AppContainer = createContainer(({params})=>{
  console.log(params.courseId);
  let files = FilesMongo.find({course_id: new Mongo.ObjectID(params.courseId)});
  console.log(files.fetch());
	return {
		files:files.fetch()
	};
}, Files);
