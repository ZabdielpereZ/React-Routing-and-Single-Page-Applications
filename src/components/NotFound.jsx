import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const NotFound = () => {
    // Navigate to the home page after 5 seconds using useNavigate hook from react-router-dom
    const navigate = useNavigate()

    setTimeout(() => {
        navigate('/')
    }, 5000) // Navigates to the home screen after 5 seconds

  return (
    <div className="not-found-container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link to="/">Go Home</Link>
    </div>
  )
}

export default NotFound
