import React from 'react'
import Gitt from '../../assets/gitttt.avif'
import './Blogs.css'
import git from '../../assets/git.png'
function Blogs() {
  return (
    <div style={{ margin: "0 12% 0 12%" }} id='blogs'>
      <h2>Blogs</h2>
      <div className='blogbox'>
        <img src={git} alt="photo" className='blogimg' />
        <div className='blogcontent'>
          <p className='blogpara'>Git : A Beginner's Guide to Version Control (part1)</p>
          <p className='blogdesc'>Learning development or making a project is easy but you need to tract every change this is where Git comes in play.</p>
          <a href="https://debraj007.hashnode.dev/git-a-beginners-guide-to-version-control-part1" className='bloganch'><button className='blogbtn'> <i className="fa-solid fa-link"></i>Blog Link</button></a>
        </div>

      </div>

      <div className='blogbox'>
        <img src={Gitt} alt="photo" className='blogimg' />
        <div className='blogcontent'>
          <p className='blogpara'>Git & GitHub Essentials</p>
          <p className='blogdesc'>As we make projects one after another, now we can track everything in projects now its time to store them in GitHub.</p>
          <a href="https://debraj007.hashnode.dev/git-github-essentials-a-beginners-guide-to-commands-for-smooth-collaboration" className='bloganch'><button className='blogbtn'> <i className="fa-solid fa-link"></i>Blog Link</button></a>
        </div>

      </div>
    </div>
  )
}

export default Blogs