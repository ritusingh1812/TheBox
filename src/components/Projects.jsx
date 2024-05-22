import './Projects.css'
import React from 'react'
import img1 from '../assets/ProjectCard.png'
import img2 from '../assets/ProjectCard (1).png'
import img3 from '../assets/ProjectCard (2).png'
import img4 from '../assets/ProjectCard (3).png'
const Projects = () => {
  return (
    <>
    <div className="container projects-box">
  <div className="row">
    <div className="col-md-4">
    <h3 className='fw-bold'>  Projects </h3>
    <ul style={{listStyleType:"none"}}>
      <li className='active-li'  style={{color:"#2947A9"}}>| All</li>
      <li style={{color:"#C2C7D6"}}>Commercial</li>
      <li  style={{color:"#C2C7D6"}}>Residential</li>
      <li  style={{color:"#C2C7D6"}}>Other</li>
    </ul>
    </div>
    <div className="col-md-8">
   


    <div class="container text-center">
  <div class="row container-flexbox">

  <div className='d-flex flex-box'>
    <img src={img1}  style={{width:"300px",margin:"20px"}}alt="-" />
    <img src={img3}  style={{width:"300px",margin:"20px"}}alt="-" />
    </div>
    <div className='d-flex flex-box'>
    <img src={img2}  style={{width:"300px",margin:"20px"}}alt="-" />
    <img src={img4}  style={{width:"300px",margin:"20px"}}alt="-" />
    </div>

    {/* <div class="col-md"><img src={img1}  style={{width:"300px",margin:"20px"}}alt="-" /></div>
    <div class="col-md"><img src={img2}  style={{width:"300px",margin:"20px"}}alt="-" /></div>
    <div class="col-md"><img src={img3}  style={{width:"300px",margin:"20px"}}alt="-" /></div>
    <div class="col-md"><img src={img4}  style={{width:"300px",margin:"20px"}}alt="-" /></div> */}
  </div>
  <div className='row'>
    <div className='d-flex flex-row lower'>
    <button className=' btn-nav'>&larr; &nbsp; Back</button>
    <p>
    
<span className="dot" style={{backgroundColor:"#2947A9"}}></span>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>
<span className="dot"></span>

</p>
    <button className='btn-nav'>Next &nbsp; &rarr;</button>
    </div>
  
  </div>
</div>

<br/>
    
    </div>
    
  </div>
</div>
    </>
  )
}

export default Projects
