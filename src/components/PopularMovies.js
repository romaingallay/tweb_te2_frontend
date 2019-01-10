import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//const api_key = process.env.API_KEY
const main_url = 'https://api.themoviedb.org/3/movie/popular?page=1'
const base_url = 'https://api.themoviedb.org/3/movie/'
const api_key = '&api_key=f1be4bafe6f7cb0cb84f5948c5b75497'
const base_url_image = 'https://image.tmdb.org/t/p/w300'
const genre_url = 'https://api.themoviedb.org/3/genre/movie/list'

class PopularMovies extends Component {
  state = {
    movies: [],
    selected: []
  }
  componentDidMount(){
    axios.get(main_url + api_key)
      .then(res => {
        this.setState({
          movies: res.data.results
        });
      })
    axios.get(genre_url + api_key)
    .then(res => {
      this.setState({
        genre: res.data.genres
      });
    })
  }

  selectMovie(id){
    let selected = [...this.state.selected,id]
    this.setState({
      selected
    })
  }
  
  render(){
    const { movies } = this.state
    const movieList = movies.length ? (
      movies.map(movie => {
        return (
          <div className="movie card" key={movie.id}>
            <div className="card-content">
              <p>Title : {movie.title}</p>
              <p>Release date : {movie.release_date}</p>
              <img src={base_url_image + movie.poster_path} alt="pic" />
              <button onClick={() => {this.select(movie.id)}}>Select movie</button>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No movies to show</div>
    );

    return (
      <div>
        <div className="container">
          <h4 className="center">Popular Movies</h4>
          {movieList}
        </div>
      </div>
    )
  }
}

export default PopularMovies