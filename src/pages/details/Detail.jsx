import React from 'react'
import "./Detail.scss"
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import DetailsBanner from './detailbanner/Detailbanner'
const Detail = () => {
  const {mediaType,id}=useParams()
  // const {data,loading}=useFetch(`/${mediaType}/${id}`)

  return (
    <div>
      <DetailsBanner/>
    </div>
  )
}

export default Detail
