import React from 'react'
import Blogcard from './blogcard'
import "./blog.css"
import Back from "../common/back/back"
const Blog = () => {
  return (
    <div>
     <Back title="Blog Posts"/>
      <section className="blog padding">
        <div className="container grid2">
            <Blogcard/>
        </div>

      </section>
    </div>
  )
}

export default Blog
