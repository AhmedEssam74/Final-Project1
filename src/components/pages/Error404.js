import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Error.css'

const Error404 = () => {
  return (
    <div class="section">
      <h1 class="error">404</h1>
      <div class="page">Ooops!!! The page you are looking for is not found</div>
      <Link class="back-home" to="/home">Back to home</Link>
    </div>
  )
}

export default Error404

