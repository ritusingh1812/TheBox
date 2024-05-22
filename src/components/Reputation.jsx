import React from 'react'
import './Reputation.css'
import headphone from '../assets/headphone.png'
import pen from '../assets/pens.png'
import man from '../assets/man.jpeg'
import { useMediaQuery } from 'react-responsive'
import Services from './Services'

const Reputation = () => {
  
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  

  return (
   <>
   
    <div className="container text-center">
      <h1 style={{padding:"30px",fontWeight:"bold"}}>Our Reputation</h1>
   

  <div className="row row-item">
    <div className="col-md col-item">
      <img src={headphone} alt="logo" className="reputation-img"style={{width:"100px"}}/>
      <br/>
      <h5>Best Services</h5>
      <p style={{color:"rgba(133, 142, 173, 1)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <div className="col-md col-item">
    <img src={headphone} alt="logo" className="reputation-img"style={{width:"100px"}}/>
      <br/>
      <h5>Best Teams</h5>
      <p style={{color:"rgba(133, 142, 173, 1)"}}> Imperdiet proin fermentum leo vel orci porta.</p>
    </div>
    <div className="col-md col-item">
    <img src={pen} alt="logo" className="reputation-img"style={{width:"100px"}}/>
      <br/>
      <h5>Best Designs</h5>
      <p style={{color:"rgba(133, 142, 173, 1)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
    </div>
    {
      isTabletOrMobile && <>
       <div className="col-md col-mobile">
    <div className='main-container-mobile container text-center'>
    <div className='row'>
    <img src={man} alt="man" />
   

    </div>


</div>
    </div>
    <div className="col-md col-mobile">
    <div className='main-container-mobile container text-center' style={{backgroundColor:"rgba(41, 71, 169, 1)",}}>
    <h1>About us</h1>
    <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.<br/> <br/>We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p> <br/>
    <button className='btn btn-lg fw-bold' style={{color:"rgba(41, 71, 169, 1)",backgroundColor:"white"}}>More on our History</button>
    </div>


</div>
      </>
    }
    </div>



  </div>
   
 

<div className="main-container-1">
<div className='container main-container'>
  <div className='man-img '><img src={man} alt="man" /></div>
  <div className='text-beside-man '>
  <h1>About us</h1>
    <p>For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way.<br/> <br/> We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</p>
    <button className='btn btn-lg fw-bold' style={{color:"rgba(41, 71, 169, 1)",backgroundColor:"white"}}>More on our History</button>
  </div>
  </div>

  
</div>





   </>
  )
}

export default Reputation
