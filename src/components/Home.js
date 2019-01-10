import React from 'react'
import { withRouter } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">TWEB TE2</h4>
        <p  className="center">Welcome here, please chose one movie list !</p>
      </div>
    </div>
  )
}

export default withRouter(Home)
