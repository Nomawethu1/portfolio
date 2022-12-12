import React from 'react'
import './header.css';
import Cta from './cta';
import Profpic from '../../assets/portfolio.jpg'
import HearderSocials from './hearderSocials';


const header = () => {
  return (
   <header>
     <div className="container header_container">
       <h5>hello I'm</h5>
       <h1>Nomawethu khoza</h1>
       <h5 className="text-light">Software developer</h5>
       <h5 className="text-light">&</h5>
       <h5 className="text-light">Fullstack developer</h5>
       <Cta/>
       <HearderSocials/>
       <div className="me">
         <img src={Profpic} alt="Profpic" />
       </div>

       <a href="#contact" className='scroll__down'>Scroll Down</a>
      
     </div>
   </header>
  )
}

export default header