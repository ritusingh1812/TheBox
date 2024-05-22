import React from 'react'
import './Services.css'
import { useMediaQuery } from 'react-responsive'
import constr from '../assets/construction.png'
import reno from '../assets/renovation.png'
import archi from '../assets/archi.png'
import repair from '../assets/repair.png'
import consultation from '../assets/consultation.png'
import electric from '../assets/electric.png'
import stats from '../assets/Stats.png'
import stats1 from '../assets/Stats (1).png'
import stats2 from '../assets/Stats (2).png'
import stats3 from '../assets/Stats (3).png'
import writing from '../assets/writing.png'
import handshake from '../assets/handshake.png'
import trophy from '../assets/trophy.png'
import blue from '../assets/blue-pen.png'
import kitchen from '../assets/kitchen.jpeg'


const Services = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 767px)' })

  return (
    <div className='services'>
     
      <div className='first-box'>
      <h1 className='fw-bold' style={{marginTop:"50px",marginBottom:"50px"}}>Services</h1>
        <div className='row service-desc'>
        <div class="col-md col-first" style={{backgroundColor:"white",color:"rgba(41, 71, 169, 1)"}}>
      <img src={constr} alt="img-1"/>
      <center><hr style={{width:"20%", borderTop: "1px solid red;"}}/></center>
      <h4>Construction</h4>
    </div>
    <div class="col-md col-first" style={{backgroundColor:"rgba(41, 71, 169, 1)",color:"white"}}>
    <img src={reno} alt="img-1"/>
      <center><hr style={{width:"20%"}}/></center>
      <h4>Renovation</h4>
    </div>
    <div class="col-md col-first" style={{backgroundColor:"white",color:"rgba(41, 71, 169, 1)"}}>
    <img src={consultation} alt="img-1"/>
      <center><hr style={{width:"20%"}}/></center>
      <h4>Consultation</h4>
    </div>
        </div>
        <div className='row service-desc'>
        <div class="col-md col-first" style={{backgroundColor:"rgba(41, 71, 169, 1)",color:"white"}}>
        <img src={repair} alt="img-1"/>
      <center><hr style={{width:"20%"}}/></center>
      <h4>Repair Services</h4>
    </div>
    <div class="col-md col-first" style={{backgroundColor:"white",color:"rgba(41, 71, 169, 1)"}}>
    <img src={archi} alt="img-1"/>
      <center><hr style={{width:"20%"}}/></center>
      <h4>Architecture</h4>
    </div>
    <div class="col-md col-first" style={{backgroundColor:"rgba(41, 71, 169, 1)",color:"white"}}>
    <img src={electric} alt="img-1"/>
      <center><hr style={{width:"20%"}}/></center>
      <h4>Electric</h4>
    </div>
        </div>
      </div>

<div className='second-box container text-center'>
<div class="row">
    <div class="col-md-8  col-text-services first position-relative">
    <img  src={stats1} alt="first" className='position-absolute' style={{ width:"300px",top:"100px",right:"200px",zIndex:"2"}}/> 
  <img  src={stats} alt="first" className='position-absolute' style={{ width:"300px",top:"200px",left:"10px"}}/> 

  <img  src={stats2} alt="first" className='position-absolute' style={{ width:"300px",top:"300px",right:"210px",zIndex:"2"}}/> 
  <img  src={stats3} alt="first" className='position-absolute' style={{ width:"300px",top:"400px",left:"10px"}}/> 


  <img src={writing} alt="-" className="position-absolute"style={{width:"80px",top:"140px" ,left:"5px"}}/>
  
  <img src={handshake} alt="-" className="position-absolute"style={{width:"80px",top:"90px" ,left:"600px",zIndex:"3"}}/>
  
  <img src={trophy} alt="-" className="position-absolute"style={{width:"80px",top:"300px" ,left:"600px",zIndex:"2"}}/>
  
  <img src={blue} alt="-" className="position-absolute"style={{width:"80px",top:"480px" ,left:"270px",zIndex:"2"}}/>
     



    </div>
    {
      isTabletOrMobile && <>
      <div className='container' style={{padding:"20px"}}>
        <div className='row'>
        <img  src={stats1} alt="first"style={{ width:"300px",margin:"30px"}}/> 
        <img src={writing} alt="-" style={{width:"140px",height:"150px"}}/>
        </div>
        <div className='row'>
        <img  src={stats} alt="first"style={{ width:"300px",margin:"30px"}}/> 
        <img src={handshake} alt="-" style={{width:"140px",height:"150px"}}/>
        </div>
        <div className='row'>
        <img  src={stats2} alt="first"style={{ width:"300px",margin:"30px"}}/> 
        <img src={trophy} alt="-" style={{width:"140px",height:"150px"}}/>
        </div>
        <div className='row'>
        <img  src={stats3} alt="first"style={{ width:"300px",margin:"30px"}}/>
        <img src={blue} alt="-" style={{width:"140px",height:"150px"}}/> 
        </div>

      </div>
      </>

    }

    <div class="col-md-4 col-text-services">
      <p style={{color:"rgba(41, 71, 169, 1)",fontSize:"50px",fontWeight:"bold"}}>30 Years Experience</p>
      <br></br>
      
      <p style={{color:"rgba(82, 91, 122, 1)",fontSize:"20px"}}>Our company has been the leading provided construction services to clients throughout the USA since 1988.</p>
      <br/>
      <button className=' fw-bold' style={{color:"white",backgroundColor:"rgba(41, 71, 169, 1)",width:"200px", height:"60px"}}>Contact us</button>

    </div>
    
  </div>
  
</div>

<div className='third-box position-relative'>
   <img src={kitchen} alt="kitchen" style={{width:"100%",height:"400px", opacity:"40%"}}/> 
   <div className='position-absolute  display-box d-flex ' style={{top:"200px", left:"15%",zIndex:"3"}}>
      <p>
      <h3>Free consultation with exceptional quality</h3>
      Just one call away: +84 1102 2703
      </p>
      <button className='btn btn-outline' style={{color:"white",borderColor:"white" ,height:"60px"}}> Get your consultation</button>
    
   </div>
   
   

</div>

    </div>
  )
}

export default Services
