import React, {Component} from 'react';
import { browserHistory } from 'react-router';
import Programs from "./programs/Programs";
import {Meteor} from "meteor/meteor";
import Navbarfix from './navbarfix';
const ROOT_URL = "https://thebibleapp.herokuapp.com/api";

class App extends Component {
  constructor(props){
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData(){
    return { isAuthenticated: Meteor.userId() !== null };
  }

  //Esta parte es la que estaba generando el error de Uncaught RangeError: Maximum call stack size exceeded
  //Tal vez deberían hacer la redirección al login
  // componentWillMount(){
  //   if (!this.state.isAuthenticated) {
  //     browserHistory.push('/');
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState){
  //   if (!this.state.isAuthenticated) {
  //     browserHistory.push('/');
  //   }
  // }

  logout(e){
    e.preventDefault();
    Meteor.logout();
    browserHistory.push('/');
  }
    render() {
        //En el navbarfix faltaria pasar el currentUser
        return (
        <div>
          <div className="row">
            <div className="col-md-12">
              <Navbarfix/>
            </div>

          </div>
        <div className='row'>
          <div className='col-md-1'>
          </div>
          <div className='col-md-9'>
            {React.cloneElement(this.props.children, {...this.state})}
          </div>
          <div className='col-md-1'></div>
          </div>
      </div>



          )
    }
}

export default App;
