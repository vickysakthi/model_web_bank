import React from 'react'
import Video from './Video'
import Nav from '../nav/Nav'

// import {useNavigate} from 'react-router-dom'
const Home = () => {
  // const navigate=useNavigate()

  return (
    <div className='home'>
      <Nav />
      <Video />
    </div>
  )
}

export default Home