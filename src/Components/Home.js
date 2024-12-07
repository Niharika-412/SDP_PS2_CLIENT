import React from 'react'

const Home = () => {
  return (
    <div className='home' style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img 
          src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional Education Environment" 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            filter: 'blur(5px)'
          }}
        />
        <div style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <h1 style={{ textAlign: 'center', color: '#fff ' }}>Welcome To <span style={{ color: 'white',fontWeight: 'bold',backgroundColor: 'blue', padding: '10px',borderRadius: '50px' }}>EDU - LOOP</span> </h1>
        </div>
      </div>
    </div>
  )
}

export default Home
