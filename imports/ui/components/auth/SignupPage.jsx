import React, { Component, PropTypes } from 'react'
import { browserHistory, Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'

export default class SignupPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    //En vez de usar document.getElementById se puede hacer uso de los refs
    let name = document.getElementById("signup-name").value;
    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    this.setState({error: "test"});
    Accounts.createUser({email: email, username: name, password: password}, (err) => {
      if(err){
        this.setState({
          error: err.reason
        });
      } else {
        browserHistory.push('/login');
      }
    });
  }

  render(){
    const error = this.state.error;
    return (
      <div className="modal show">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="text-center">Sign up</h1>
            </div>
            <div className="modal-body">
              { error.length > 0 ? <div className="alert alert-danger fade in">{error}</div> :''}
              <form id="login-form" className="form col-md-12 center-block" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input type="text" id="signup-name" className="form-control input-lg" placeholder="name"/>
                </div>
                <div className="form-group">
                  <input type="email" id="signup-email" className="form-control input-lg" placeholder="email"/>
                </div>
                <div className="form-group">
                  <input type="password" id="signup-password" className="form-control input-lg" placeholder="password"/>
                </div>
                <div className="form-group text-center">
                  <div className="col-md-6">
                    <input type="submit" id="login-button" className="btn btn-app btn-lg  btn-block" value="Sign Up" />
                  </div>
                  <div className="col-md-6">
                      <Link className="btn btn-danger btn-lg btn-block" to={'/' }>Go Back</Link>
                    </div>
              </div>
                <div className="form-group">
                  <p className="text-center">Already have an account? Please login <Link to="/login">here</Link></p>
                </div>
              </form>
            </div>
            <div className="modal-footer" style={{borderTop: 0}}></div>
          </div>
        </div>
      </div>
    );
  }
}
