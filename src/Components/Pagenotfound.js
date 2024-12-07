import React from 'react'
import { Link } from 'react-router-dom'

const Pagenotfound = ({ isDarkMode }) => {
  return (
    <div className='pagenotfound' style={{ 
      height: '100vh', // Changed from '100%' to '100vh'
      backgroundColor: isDarkMode ? '#032142' : 'rgb(230, 255, 255)', 
      color: isDarkMode ? '#fff' : 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden' // Prevents scrolling
    }}>
      <div className='pagenotfound-content'>
        <h1>404</h1>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <Link to={"/home"}>Go back to homepage</Link>
      </div>
    </div>
  )
}

export default Pagenotfound