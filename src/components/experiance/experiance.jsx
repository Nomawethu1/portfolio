import React from 'react';
import './experiance.css';
import{BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>JAVA Script</h4>
                  <small className='text-light'>Intermedite</small>
                 </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill/>
                 <div>
                 <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                 </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                 <div>
                 <h4>React</h4>
                  <small className='text-light'>Intermedite</small>
                 </div>
                </div>
              </article>
          </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>Node js</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>Mongo db</h4>
                  <small className='text-light'>Intermedite</small>
                  </div>
                </div>
              </article>
              <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  <div>
                  <h4>MySql</h4>
                  <small className='text-light'>Experienced</small>
                  </div>
                </div>
              </article>
              {/* <article>
                <div className="experience__details">
                  <BsPatchCheckFill className="experience__details-icon"/>
                  
                </div>
              </article> */}
          </div>
        
      </div>
      </div>

    </section>
  )
}

export default experience