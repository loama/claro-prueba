import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showMovies } from '../actions'

class App extends Component {

  componentWillMount() {
    this.props.showMovies('firstload')
  }

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.title} onClick={() => this.openModal(movie.id)}>
          <img src={movie.image_small}></img>
          <div className="hover">
            <div>{movie.title} </div>
          </div>
        </li>
      )
    })
  }

  handleChange(event) {
    //console.log(event.target.value);
    this.props.showMovies(event.target.value)
  }

  openModal(modal) {
    console.log(modal)
    //this.props.showModal(modal)
    document.getElementById('modal').style.transform = 'translate3d(0, 0, 0)'
    document.getElementById('modalOverlay').style.transform = 'translate3d(0, 0, 0)'
    setTimeout(function () {
      document.getElementById('modal').style.opacity = 1
      document.getElementById('modalOverlay').style.opacity = 1
    }, 100)
  }

  hideModal() {
    document.getElementById('modal').style.opacity = 0
    document.getElementById('modalOverlay').style.opacity = 0
    setTimeout(function () {
      document.getElementById('modal').style.transform = 'translate3d(0, -3000px, 0)'
      document.getElementById('modalOverlay').style.transform = 'translate3d(0, -3000px, 0)'
    }, 400)
  }

  render() {
    return (
      <div>
        <div className="loader-overlay" id="loader-overlay">
          <div className="preloader-1">
            <img className="logo" src="src/clarovideo-logo.svg"></img>
            <span className="line line-1"></span>
            <span className="line line-2"></span>
            <span className="line line-3"></span>
            <span className="line line-4"></span>
            <span className="line line-5"></span>
            <span className="line line-6"></span>
            <span className="line line-7"></span>
            <span className="line line-8"></span>
            <span className="line line-9"></span>
          </div>
        </div>
        <div className="modal" id="modal">
          <img src="https://clarovideocdn9.clarovideo.net/PELICULAS/BUFFYTHEVAMPIRESLAYER/EXPORTACION_WEB/SS/BUFFYTHEVAMPIRESLAYERWVERTICAL.jpg?size=200x300"></img>
          <div className="title"> La caja </div>
          <div className="description"> Los Lewis son una familia normal pero lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis nibh mollis, tincidunt sapien et, congue enim. Quisque sed augue erat. Aliquam diam velit, porta sed feugiat vel, scelerisque</div>
          <div> <span className="tag">Actor:</span> </div>
          <div> <span className="tag">Director:</span> </div>
          <div> <span className="tag">Escritor:</span> </div>
          <div> <span className="tag">Productor:</span> </div>
          <div> <span className="tag">Género:</span> </div>
          <div> <span className="tag">Título original:</span> </div>
        </div>
        <div className="modalOverlay" id="modalOverlay" onClick={this.hideModal}></div>
        <div className="navbar">
          <img className="logo" src="src/clarovideo-logo.svg"></img>
          <input className="search" type="text" placeholder="buscar..." onChange={this.handleChange.bind(this)}></input>
        </div>
        <ul>
          { this.renderMoviesList() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.list
  }
}

export default connect(mapStateToProps, { showMovies })(App)
