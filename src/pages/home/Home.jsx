import React from 'react'
import "./Home.scss"
import Herobanner from './herobanner/Herobanner'
import Trending from './trending/Trending'
import Popular from './popular/Popular'
import Top from './topRated/Top'
const Home = () => {
  return (
    <div className='Home__Page'>
      <Herobanner/>
      <Trending/>
      <Popular/>
      <Top/>
      <div style={{height:1000}}></div>
    </div>
  )
}

export default Home
