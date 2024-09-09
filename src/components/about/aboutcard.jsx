import React from 'react'
import Title from "../common/title/title"
import Heading from "../common/heading/heading"
import { homeAbout } from '../../dummydata'
import AWrapper from './AWrapper'
import './about.css'
const Aboutcard = () => {
  return (
    <div>
    <section className="aboutHome">
        <div className="container flexSB">
            <div className="left row">
                <img src="./images/about.webp"></img>
            </div>
            <div className="right-row">
              <Title subtitle="LEARN ANYTHING" title="Benefits About Online Learning"></Title>
              <div className="items">
                {homeAbout.map((val)=>(
                  <div className="item flexSB">
                    <div className="img">
                        <img src={val.cover}/>
                    </div>
                   <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                   </div>
                  </div>  
                ))}
              </div>
            </div>
        </div>
    </section>
    <AWrapper/>
    </div>
  )
}

export default Aboutcard
