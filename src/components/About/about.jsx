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
        {/* <div className="about__me">
          <div className="about__me-img">
            <img src={Me} alt="Profpic" />
          </div>
        </div> */}

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6 months working</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
            </div>
            <p>
           My name is Nomawethu I am a full-stack developer with hands-on experience designing, developing, and implementing applications and solutions using a range of technologies and programming languages. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full-stack Developer.
            </p>

          
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About