import React from 'react'
import "./Intro.css"
import {Link} from "react-scroll"
import bg from "../../assets/personal.png"

function Intro() {
  return (
    <section className="Intro">
        <div className="Introcontent">
            <span className='hello'>Hello, I'm</span>
            <br />
            <h2>DEBRAJ MONDAL</h2>
            <p className='para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit unde laboriosam commodi repellat laudantium dicta explicabo, a sint libero molestiae rem adipisci alias sequi perspiciatis quo aliquid nulla fuga eum!</p>
            <Link><button className='btn' > <i class="fa-solid fa-bolt"></i> Connect with me</button></Link>
        </div>
        <div className='image-container'>
        <img src={bg} alt="Something" className='image'/>
        </div>
    </section>
  )
}

export default Intro
