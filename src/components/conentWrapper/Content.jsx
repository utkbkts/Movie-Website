import React from 'react'
import "./Content.scss"
const Content = ({children}) => {
  return (
    <div className='contentWrapper'>
      {children}
    </div>
  )
}

export default Content
