import React from "react"
import Back from "../common/back/back"
import "./contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2975.6223825004504!2d76.92252432743975!3d11.036910776031675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858b50a273eef%3A0x79b6f9ab295123bb!2s33%2C%20Edayarpalayam%2C%20Coimbatore%2C%20Tamil%20Nadu%20641025!5e0!3m2!1sen!2sin!4v1724651869045!5m2!1sen!2sin'
  return (
    <>
      <Back title='Contact us' />
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@yoursite.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> + 1235 2355 98</p>
              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
