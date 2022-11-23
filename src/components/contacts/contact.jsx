import React, { useRef } from 'react';
import './contact.css';
import {MdEmail} from 'react-icons/md'
import {FaWhatsappSquare} from 'react-icons/fa'
import emailjs from 'emailjs-com';




const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6kcpia9', 'template_482uxu8', form.current, 'Koi_4kyNInUshSbT8')
     e.target.reset();
  };

  return (
    <section id="contact" >
      <h5>Get in Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>nomawehuk2@gmail.com</h5>
            <a href="mailto:nomawehuk2@gmail.com" target="_blank">Send a message</a>
            </article>

            <article className="contact__option">
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>0712345678</h5>
            <a href="https://api.whatsapp.com/send?hone+27796543234" target="_blank">Send a message</a>
            </article>
        </div>
        
        {/* End of contact option */}

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your full name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea type="message" rows="7" placeholder='Your Message' required  />
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact