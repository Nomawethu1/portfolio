import React from 'react'
import CV from '../../assets/CV.pdf'

const cta = () => {
  return (
    <div className="cta">
      {/* buttons on the LANDING PAGE */}
        <a href={CV} download className='btn'>Download CV</a>  
        <a href='#contact' className='btn btn-primary'>Let's talk</a>
    </div>
  )
}

export default cta