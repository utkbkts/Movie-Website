import React, { useState } from 'react'
import Content from '../../../components/conentWrapper/Content'
import Switch from '../../../components/switch/Switch'
import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'
const Top = () => {
  const [endPoint,setendPoint]=useState("movie")
    const {data,loading}=useFetch(`/${endPoint}/top_rated`)
    const onTabChange=(tab)=>{
      setendPoint(tab==="Movies"?"movie":"tv")
    }
    console.log(endPoint);
  return (
    <div className='carousel'>
        <Content>
            <span className="carouseltitle">Top Rated</span>
            <Switch data={["Movies","TV Shows"]} onTabChange={onTabChange}/>
        </Content>
        <Carousel data={data?.results} loading={loading} endpoint={endPoint}/>
    </div>
  )
}

export default Top;
