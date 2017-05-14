import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';
class Navbarfix extends Component {

  constructor(props) {
    super(props);
    this.state = {
      log: '',
    };
  }

  componentWillMount(){
    if (Meteor.user()) {
      console.log('didupdate', Meteor.user().username);
      this.setState({
        username: Meteor.user().username
      });
    }
  }
  signup() {
    browserHistory.push('/signup');
  }
  login(x) {
    this.setState({ log: x });
  }
  logout() {
    Meteor.logout();
    browserHistory.push('/');
  }


  render() {
    let bar;
    const logged = Meteor.user();
    console.log(logged);

      return (
        <div>
          <nav className="navbar navbar-custom navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only ">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand  navbar-title" href="#"></a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">

              {logged?
                <ul className="nav navbar-nav">
                  <li><Link role="button"   data-toggle="collapse" data-target="#navbar"  to={'/programs'}>Programas</Link></li>
                  <li><Link role="button"   data-toggle="collapse" data-target="#navbar"  to={'/upload'}>Cargar archivos</Link></li>
                </ul>

                 :
                 <ul className="nav navbar-nav">
                 <li><a role="button"   data-toggle="collapse" data-target="#navbar"  href="#">Inicio</a></li>
                 <li><a role="button"   href="#services">Acerca de la aplicación</a></li>
                 </ul>
              }
          {logged?
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a role="button" data-toggle="collapse" data-target="#navbar"  href="#" onClick={() => { this.logout(); }}> <i className="fa fa-sign-out"></i>  Cerrar sesión</a>
              </li>
            </ul>
             :
             <ul className="nav navbar-nav navbar-right">
                   <li>
                     <Link to={'/signup'}  role="button"  data-toggle="collapse" data-target="#navbar"  href="#" onClick={this.signup}>Registrarse</Link>
                   </li>

                   <li>
                     <Link to={'/login'} role="button"   data-toggle="collapse" data-target="#navbar"  href="#"> <i className="fa fa-sign-in"></i> Iniciar sesión</Link>
                   </li>

             </ul>
           }



          </div>{/*/.nav-collapse */}
        </div>
      </nav>
        </div>
        )
  }

}
export default createContainer(() => {
  return { currentUser: Meteor.user() };
}, Navbarfix);
