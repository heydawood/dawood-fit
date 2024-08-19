import React from 'react'
import SectionWrapper from './SectionWrapper'

function Header(props){
  const {index, title, description} = props
  return(
    <div>
      <div>
        <p>{}</p>
      </div>
    </div>
  )
}

export default function Generator() {
  return (
    <SectionWrapper header={'Generate Your Workout'} title={['It\'s', 'Huge', ' o\'Clock']}>

    </SectionWrapper>
  )
}
