import React from 'react'
import anim from './../images/anim.jpg'
import dance from './../images/dance.png'
import eat from './../images/eat.jpg'
import flow from './../images/flow.jpg'
import hand from './../images/hand.jpg'
import haus from './../images/haus.jpg'
import lit from './../images/lit.jpg'
import mam from './../images/mam.jpg'
import mast from './../images/mast.jpg'
import mil from './../images/mil.jpg'
import mon from './../images/mon.jpg'
import nig from './../images/nig.jpg'
import umb from './../images/umb.jpg'

import './home.css'

const Home = () => {
  return (
    <div className='slide'>
     <div className='imageslide'>
       
         <img src={anim} alt='anim' />
         <img src={dance} alt='anim' />
         <img src={eat} alt='anim' />
         <img src={flow} alt='anim' />
         <img src={hand} alt='anim' />
         <img src={haus} alt='anim' />
         <img src={lit} alt='anim' />
         <img src={mam} alt='anim' />
         <img src={mast} alt='anim' />
         <img src={mil} alt='anim' />
         <img src={mon} alt='anim' />
         <img src={nig} alt='anim' />
         <img src={umb} alt='anim' />
         
     </div>
    </div>
  )
}

export default Home