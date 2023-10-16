import React, { useState } from 'react'
import Content from '../../../components/conentWrapper/Content'
import Switch from '../../../components/switch/Switch'
import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'
const Trending = () => {
  const [endPoint,setendPoint]=useState("day")
    const {data,loading}=useFetch(`/trending/movie/${endPoint}`)
    const onTabChange=(tab)=>{
      setendPoint(tab==="Day"?"day":"week")
    }
  return (
    <div className='carousel'>
        <Content>
            <span className="carouseltitle">Trending</span>
            <Switch data={["Day","Week"]} onTabChange={onTabChange}/>
        </Content>
        <Carousel data={data?.results} loading={loading}/>
    </div>
  )
}

export default Trending
