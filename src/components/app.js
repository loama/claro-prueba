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
        <li key={movie.title}>
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

  render() {
    return (
      <div>
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
