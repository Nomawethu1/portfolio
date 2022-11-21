import React from 'react'
import './portfolio.css'
import Img1 from '../../assets/track.jpeg'
import Img2 from '../../assets/images.jpeg'
import Img3 from '../../assets/app.jpeg'
import Img4 from '../../assets/emp.jpeg'


const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Profile</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__itaem-img">
            <img src={Img1} alt="" />
            <h3>This is a portfolio item tittle</h3>
            <a href="https://github.com/Nomawethu1/apartmentfinder" className='btn btn-primary'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__itaem-img">
            <img src={Img2} alt="" />
            <h3>This is a portfolio item tittle</h3>
            <a href="https://github.com/Nomawethu1/apartmentfinder" className='btn btn-primary'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__itaem-img">
            <img src={Img3} alt="" />
            <h3>This is a portfolio item tittle</h3>
            <a href="https://github.com/Nomawethu1/apartmentfinder" className='btn btn-primary'>GitHub</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__itaem-img">
            <img src={Img4} alt="" />
            <h3>This is a portfolio item tittle</h3>
            <a href="https://github.com/Nomawethu1/apartmentfinder" className='btn btn-primary'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default portfolio