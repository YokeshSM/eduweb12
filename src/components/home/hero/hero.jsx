import React from 'react'
import "./hero.css"
import Title from "../../common/title/title"
const  Hero = () => {
  return (
    <div>
     <section className="hero">
     <div className='container'>
        <div className="row">
          <Title subtitle="WELCOME TO RANKERS" title="BEST ONLINE EDUCATION"></Title>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dolore suscipit quae minima cum. Sapiente enim doloremque quia pariatur earum! Sunt modi necessitatibus .</p>
        <div className="button">
            <button className="primary-btn">
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
            </button>
            <button className="primary-btn">
                VIEW COURSES <i className='fa fa-long-arrow-alt-right'></i>
            </button>
        </div>
        </div>
     </div>
     </section>
     <div className="margin"></div>
    </div>
  )
}

export default Hero
