import React from 'react'
import "./Intro.css"
import { Link } from "react-scroll"
import bg from "../../assets/personal.png"

function Intro() {
  return (
    <section className="Intro" id='intro'>
      <div className="Introcontent">
        <span className='hello'>Hello, I'm</span>
        <br />
        <h2>DEBRAJ MONDAL</h2>
        <br />
        <p style={{
          fontFamily: 'Comic Neue',
          fontSize: '1.25rem'
        }}>Hello all, myself Debraj, a 20 years old Computer science & Engineering student who dreams of becoming one of the best software engineeres ever known. Currently I am pursuing my B.Tech degree in CSE from CoochBehar Government Engineering College. My expertise encircles within Frontend Web Development. Currently I am learning React into depth and soon want to explore backend as well. <br /> <br /> I am an member of our College's Technical Club named, Tech-O-Nicks. Also a speaker and Blog writer on Technical things. Have a handful experience on Web Development by my own. I am a passionate and responsible person. I am an introvert, but a Tech freakmas well.</p>

        <Link activeClass="active" to="footer" smooth={true} spy={true}><button className='btn' > <i class="fa-solid fa-bolt"></i> Connect with me</button></Link>
      </div>
      <div className='image-container'>
        <img src={bg} alt="Something" className='image' />
      </div>
    </section>
  )
}

export default Intro
