import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import UpcomingMovies from './components/UpcomingMovies'
import Home from './components/Home'
import PopularMovies from './components/PopularMovies'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/popular' component={PopularMovies}/>
            <Route path='/upcoming' component={UpcomingMovies} />
            <Route exact path='/' component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
