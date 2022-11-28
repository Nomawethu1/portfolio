import React from 'react'
import './about.css';
import Me from '../../assets/me.jpg'
import{FaAward} from 'react-icons/fa'
// import{FiUsers} from 'react-icons/fi'[;]
import{AiFillFolderOpen} from 'react-icons/ai'






const About = () => {
  return (
    <section id="about">
      <h5>get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="Profpic" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>experiance</h5>
              <small>1 Year working</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
            </div>
            <p>
            I am able and capable of learning quickly and I believe I will also contribute in making the company more successful. I have acquired knowledge about this job through studying and that has been well indicated on my curriculum vitae.
            </p>

          
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About