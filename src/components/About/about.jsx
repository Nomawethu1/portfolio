import React from 'react'
import './about.css';
import Me from '../../assets/profpic.jpeg'
import{FaAward} from 'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
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
              <small>3+ Years working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ clients world wide</small>
            </article>

            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, id eligendi. Incidunt perspiciatis cum libero sit nobis optio cupiditate laboriosam id vel provident, nisi doloremque aut voluptate repellendus neque quisquam?
            </p>

          
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About