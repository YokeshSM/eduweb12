import React from 'react'
import Back from '../common/back/back'
import Coursecard from './coursecard'
import OnlineCourses from './onlinecourses'
const Coursehome = () => {
  return (
    <div>
      <Back title='Explore Courses'/>
      <Coursecard/>
      <OnlineCourses/>
    </div>
  )
}

export default Coursehome
