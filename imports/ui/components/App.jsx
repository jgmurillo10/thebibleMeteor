import React, {Component} from 'react';
import Programs from "./Programs";
import {Meteor} from "meteor/meteor";

const ROOT_URL = "https://thebibleapp.herokuapp.com/api";
// const ROOT_URL = "http://localhost:3000/api";

class App extends Component {

    render() {

        return (
        <div>
          <div className='row'>
          {/* <Navbarfix/> */}
          </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-9'>
            {/* {React.cloneElement(this.props.children, {...this.state})} */}
            <Programs/>
          </div>
          <div className='col-md-1'></div>
          </div>
      </div>



          )
    }
}

export default App;
