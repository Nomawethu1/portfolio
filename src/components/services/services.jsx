import React from 'react'
import './services.css'
import{BsCheck2} from 'react-icons/bs'

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end of first card */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>

            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end of Web Development */}

        <article className="service">
          <div className="service_head">
            <h3>Content creation</h3>
          </div>
          <ul className="service_list">
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BsCheck2 className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end of first card */}
      </div>
    </section>
  )
}

export default services
