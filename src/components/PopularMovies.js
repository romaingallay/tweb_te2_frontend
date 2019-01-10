import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//const api_key = process.env.API_KEY
const main_url = 'https://api.themoviedb.org/3/movie/popular?page=1'
const base_url = 'https://api.themoviedb.org/3/movie/'
const api_key = '&api_key=f1be4bafe6f7cb0cb84f5948c5b75497'
const base_url_image = 'https://image.tmdb.org/t/p/w300'

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
  }

  selectMovie(id){
    let selected = [...this.state.selected,id]
    this.setState({
      selected
    })
  }

  deselectMovie(id){
    if(this.state.selected.includes(id)) {
      let selected = this.state.selected
      for(let i = selected.length-1; i >= 0; i--){  // STEP 1
        if(selected[i] === id){                // STEP 2
            selected.splice(i,1);                    // STEP 3
        }
      }
      this.setState({
        selected
      })
    }
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
              {this.state.selected.includes(movie.id) ? <p><i>Movie selected</i></p>: <p><i>Movie not selected</i></p>}
              <button onClick={() => {this.selectMovie(movie.id)}}>Select movie</button>
              <button onClick={() => {this.deselectMovie(movie.id)}}>Deselect movie</button>
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