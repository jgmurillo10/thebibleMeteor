import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {

    render() {
      var imgUrl = '/imports/assets/images/cover-one.jpg';
        var divStyle = {
          backgroundImage: 'url(' + imgUrl + ')'
        };

        return (

          <div>
          <div id="intro-carousel" className="carousel slide">

              <div className="carousel-inner">
                <div className="fill" style={divStyle}></div>
                <div className="carousel-caption">
                    <h1 className="animated slideInDown">Taking your business to <span className="highlight">new heights</span></h1>
                    <p className="intro-text animated slideInUp">Hallooou is designed and aimed at creative teams that want to showcase their products and services in a new, creative way.</p>
                    <a href="http://bit.ly/hh5_template" className="btn btn-default btn-lg">Download theme</a>
                </div>


              </div>

          </div>

          <section id="about" className="about content-section alt-bg-light">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6">
                          <h2>Bienvenidos</h2>
                          <h3 className="caption gray">Carga tus archivos desde donde quieras</h3>
                          <p>TheBibleApp es una iniciativa de estudiantes, para estudiantes. Esta aplicación te permite subir apuntes, talleres, solucionarios y demás documentos útiles para la vida universitaria.</p>

                          <blockquote>
                              There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.
                              <span>Ray Goforth</span>
                          </blockquote>

                          <h3 className="gray light">Este proyecto es una aplicación web diseñada para almacenar archivos académicos. Los archivos están organizados por programa y curso de la Universidad de los Andes.
TheBibleApp permite a los usuarios crear o eliminar un Programa de Pregrado, crear un Curso y cargar un archivo de cualquier tipo (pdf, png, zip, etc).
Además, el usuario puede descargar cualquiera de los archivos enumerados por la aplicación.
Nota: evite cargar archivos confidenciales. Estos archivos se almacenan en Amazon.</h3>

                      </div>

                      <div className="col-md-6">

                          <div className="embed-responsive embed-responsive-16by9">
                              <iframe src="https://player.vimeo.com/video/132613118?title=0&amp;byline=0&amp;portrait=1" className="embed-responsive-item" frameBorder="0" webkitallowfullscreen mozAllowFullScreen allowFullScreen></iframe>
                          </div>
                      </div>
                  </div>
              </div>
          </section>


          <section id="services" className="services content-section">
              <div className="container">
                  <div className="row text-center">
                      <div className="col-md-12">
                          <h2>¿Qué puedes hacer con esta aplicación?</h2>
                          <h3 className="caption gray"></h3>
                      </div>

                      <div className="container">
                          <div className="row text-center">
                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-cogs fa-3x"></i>
                                      <h4>Compartir</h4>
                                      <p>Subir archivos de direntes materias de diferentes programas.</p>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-paint-brush fa-3x"></i>
                                      <h4>Descargar</h4>
                                      <p>Cientos de talleres, solucionarios, explicaciones y demás material disponible.</p>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-bullhorn fa-3x"></i>
                                      <h4>Actualizar</h4>
                                      <p>Actualizar o corregir material publicado en la aplicación.</p>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-database fa-3x"></i>
                                      <h4>Fortalecer</h4>
                                      <p>Fortalecer tus conocimientos en la materia que no vas tan bien.</p>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-align-left fa-3x"></i>
                                      <h4>Preparar</h4>
                                      <p>Prepararte para parciales, finales, quices e incluso para participar en clase.</p>
                                  </div>
                              </div>

                              <div className="col-md-4">
                                  <div className="row services-item sans-shadow text-center">
                                      <i className="fa fa-camera fa-3x"></i>
                                      <h4>Entender</h4>
                                      <p>Entender a fondo los temas de esa materia en la que no entiendes nada.</p>
                                  </div>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
        </div>



          )
    }
}

export default Home;
