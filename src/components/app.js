import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showMovies } from '../actions'
import { showModal } from '../actions'

class App extends Component {

  componentWillMount() {
    this.props.showMovies('firstload')
  }

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.title} onClick={() => this.openModal(movie.id)}>
          <img className="big" src={movie.image_small}></img>
          <img className="small" src={movie.image_medium}></img>
          <div className="hover">
            <div>{movie.title} </div>
          </div>
        </li>
      )
    })
  }

  renderModal() {
      return (
        <div>
          <div className="beforeLoad"></div>
          <img className="big" src={this.props.modal.val.image_medium}></img>
          <img className="small" src={this.props.modal.val.image_still}></img>
          <div className="title"> {this.props.modal.val.title} </div>
          <div className="description"> {this.props.modal.val.description_large} </div>
          <div className="rating_code"> {this.props.modal.val.rating_code} </div>
          <div> <span className="tag">Título original:</span> {this.props.modal.val.title_original} </div>
        </div>
      )
  }

  renderModalActors() {
    return this.props.modal.extendedModal.roles[0].talents.talent.map((actor) => {
      return (
        <span className="info" key={actor.id}> {actor.name} {actor.surname}, </span>
      )
    })
  }

  renderModalDirector() {
    return this.props.modal.extendedModal.roles[1].talents.talent.map((director) => {
      return (
        <span className="info" key={director.id}> {director.name} {director.surname} </span>
      )
    })
    /* </span> {this.props.modal.extendedModal.roles.id} </div>
    <div> <span className="tag">Director:</span> </div>
    <div> <span className="tag">Escritor:</span> </div>
    <div> <span className="tag">Productor:</span> </div>
    <div> <span className="tag">Género:</span> </div> */
  }

  renderModalWriter() {
    return this.props.modal.extendedModal.roles[1].talents.talent.map((writer) => {
      return (
        <span className="info" key={writer.id}> {writer.name} {writer.surname} </span>
      )
    })
  }

  renderModalProducer() {
    return this.props.modal.extendedModal.roles[1].talents.talent.map((producer) => {
      return (
        <span className="info" key={producer.id}> {producer.name} {producer.surname} </span>
      )
    })
  }

  handleChange(event) {
    //console.log(event.target.value);
    var action = {
      value: event.target.value,
      type: 'filter'
    }
    this.props.showMovies(action)
  }

  openModal(modal) {
    // console.log(modal)
    // console.log(this)
    this.props.showModal(modal)
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
    this.props.showModal('empty')
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
          { this.renderModal() }
          <div className="tag">Actor: { this.renderModalActors() } </div>
          <div className="tag">Director: { this.renderModalDirector() } </div>
          <div className="tag">Escritor: { this.renderModalWriter() } </div>
          <div className="tag">Productor: { this.renderModalProducer() } </div>
        </div>
        <div className="modalOverlay" id="modalOverlay" onClick={() => this.hideModal()}></div>
        <div className="navbar">
          <img className="logo" src="src/clarovideo-logo.svg"></img>
          <input className="search" type="text" placeholder="buscar..." onChange={this.handleChange.bind(this)}></input>
        </div>
        <ul>
          { this.renderMoviesList() }
          <div id="no-movies" className="no-movies"> No se encontraron películas </div>
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movie.list,
    modal: state.modal
  }
}

export default connect(mapStateToProps, { showMovies, showModal })(App)
