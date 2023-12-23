import React from 'react'
import Skillbox from './Skillbox'
import CSSS from '../../assets/css.png'
import fgm from '../../assets/FIGMA.png'
import github from '../../assets/Github.png'
import htmlll from '../../assets/htmlll.png'
import jss from '../../assets/js.png'
import rct from '../../assets/RREACT.png'







function Skills() {
  return (
    <div className='content'>
      <h2>What I do</h2>
      <br />
      <br />
      <div className='row'>
        <Skillbox image={htmlll} />
        <Skillbox image={CSSS} />
        <Skillbox image={jss} />
      </div>
      <div className='row'>
        <Skillbox image={github} />
        <Skillbox image={rct} />
        <Skillbox image={fgm} />

      </div>
    </div>

  )
}

export default Skills