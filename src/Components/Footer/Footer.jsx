import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <div style={{margin:'2rem 12% 2rem 12%'}} className='footerdiv' id='footer'>
        <h3>Contact Me</h3>
        <br />
        <div className='socialicons'>
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/debraj.mondal.14289/"><i className="fa-brands fa-facebook"></i></a>
            <a href="https://www.linkedin.com/in/debrajmondal007/"><i className="fa-brands fa-linkedin"></i></a>
        </div>
    </div>
  )
}

export default Footer