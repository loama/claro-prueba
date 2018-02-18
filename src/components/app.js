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
          <span>{movie.title} </span>
          <span>{movie.name} </span>
          <span>{movie.email} </span>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <h2>Movies List</h2>
        <div>
          { this.renderMoviesList() }
        </div>
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
