import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { showMovies } from '../actions'

class App extends Component {

  componentWillMount() {
    this.props.showMovies()
  }

  renderMoviesList() {
    return this.props.movies.map((movie) => {
      return (
        <li key={movie.id}>
          <div>{movie.title} </div>
          <div>{movie.name} </div>
          <div>{movie.email} </div>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo" src="src/clarovideo-logo.svg"></img>
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
