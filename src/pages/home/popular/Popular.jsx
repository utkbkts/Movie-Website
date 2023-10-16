import React, { useState } from 'react'
import Content from '../../../components/conentWrapper/Content'
import Switch from '../../../components/switch/Switch'
import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'
const Popular = () => {
  const [endPoint,setendPoint]=useState("movie")
    const {data,loading}=useFetch(`/${endPoint}/popular`)
    const onTabChange=(tab)=>{
      setendPoint(tab==="Movies"?"movie":"tv")
    }
  return (
    <div className='carousel'>
        <Content>
            <span className="carouseltitle">Popular</span>
            <Switch data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </Content>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default Popular
