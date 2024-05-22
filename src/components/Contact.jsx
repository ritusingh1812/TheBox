import './Contact.css'
import React from 'react'
import logo from '../assets/brand-logo.png'
import fb from '../assets/akar-icons_facebook-fill.png'
import linkedin from '../assets/entypo-social_linkedin-with-circle.png'
import twt from '../assets/entypo-social_twitter-with-circle.png'

const Contact = () => {
  return (
    <>
      <div className='outer-contact'>
        <div className='d-flex align-items-center justify-content-center inner-contact'>
          <div className='form-contact'>
            <h3 className='fw-bold '>what can us do for you?</h3>
            <p>We are ready to work on a project of any complexity,<br></br> whether it’s commercial or residential.</p>
            <form>
              
              <div class="container text-center">
              <div class="row">
              <div class="col-md"><input type="text" className='inp' placeholder='Name'></input></div>
              <div class="col-md"><input type="text" className='inp' placeholder='Email'></input></div>
              </div>
              <div class="row">
              <div class="col-md"><input type="text" className='inp' placeholder='Reason for contacting'></input></div>
              <div class="col-md"><input type="text" className='inp' placeholder='Phone'></input></div>
              </div>
              </div>

              <textarea rows={5}  placeholder='Message'></textarea>
              <br/>
              <button className='submit-btn' >Submit</button>

            </form>
          </div>
        </div>
    
      </div>
      <div className='outer-contact-2'>
        <div className='d-flex middle-container'>
          <div>

            <ul className='contact-list' >
           <li> <span style={{color:"#2947A9"}}>Address: </span>6391 Elgin St. Celina, Delaware 10299<br/></li>
           <li><span style={{color:"#2947A9"}}>Phone: </span>+84 1102 2703<br/></li> 
            <li><span style={{color:"#2947A9"}}>Email: </span>Hello@thebox.com<br/></li>
            <li><img src={logo} style={{width:"200px"}}/></li>
            </ul>
          
          </div>
          <div className='subscribe'>
            <h5 style={{color:"#2947A9"}}>Newsletter:</h5>
            
            <input type='text' placeholder='Enter email here' style={{border:"1px ridge",borderRadius:"5px",padding:"5px"}}></input> <button className='btn' style={{color:"white",backgroundColor:"#F9995D",width:"100px"}}>Subscribe</button>
            <br/>
            <br/>
            <h5 style={{color:"#2947A9"}}>Social:</h5>
            <p> 
              <span> <img src={fb} style={{width:"45px"}}/></span>
              <span> <img src={linkedin} style={{width:"50px"}}/></span>
              <span> <img src={twt} style={{width:"50px"}}/></span>
            </p>

          </div>
        </div>

</div>
<div className='footer'>
<p>TheBox Company © 2022. All Rights Reserved</p>
</div>

    </>
  )
}

export default Contact
