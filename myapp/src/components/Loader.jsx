import React from 'react'
import { Audio } from  'react-loader-spinner';
const Loader = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",marginTop:"40vh"}}>
        <Audio
    height = "80"
    width = "80"
    radius = "9"
    color = 'teal'
    ariaLabel = 'three-dots-loading'
  />
    </div>
  )
}

export default Loader
