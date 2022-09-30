import React from 'react'
import styled from 'styled-components'
const Announce=styled.div`
  height:27px;
  background-color:teal;
  position: absolute;
  top:0;
  width:100%;
  left:0;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:14px;
  font-weight:500;
`
const Announcementt = () => {
  return (
    <Announce>
        Super Deal! Free Shipping for orders over 500 Ruppees.
    </Announce>
  )
}

export default Announcementt;
