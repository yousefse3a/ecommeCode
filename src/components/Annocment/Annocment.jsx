import React from 'react'
import styled from 'styled-components'

export default function Annocment() {
    const Contianer=styled.div({
        height:'30px',
        backgroundColor:'teal',
        color:'lemonchiffon',
        fontSize:'14px',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    })
  return (
    <Contianer>
        Super Deal! Free Shipping on Orders Over $50
    </Contianer>
  )
}
