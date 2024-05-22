import './Second.css'
import React from 'react'
import building from '../assets/background-building.jpeg'


const Second = () => {
  return (
    <>
      <div className='second-container'>
        <img src={building}/>
        <div className='heading'>
          <p>Building Things <br/> is our Mission</p>
        </div>
        <div className='slider-outer'>
        <div className='slider'>
         
          <h3 style={{color:"white"}}>Feature Projects</h3>
          <p style={{color:"white"}}> The national university of<br/>
         
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Architecture</p>
         

          </div>
          
          <div className='btn-grp '>
          <a href="/" class="btn-prev">&larr; Previous</a>
          <a href="/" class="btn-next">Next &rarr;</a>
          </div>
          

        
        </div>

      </div>
      <div className='container'>
        <div className='row'>
        {/* <Reputation/> */}
        </div>
        
      </div>
    
        
    </>
  )
}

export default Second
