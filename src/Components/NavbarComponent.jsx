import React from 'react'
import TopnavbarComponent from './TopnavbarComponent'
import styled from "styled-components"
const Div=styled.div`
  width: 100%;
  height:20%;
  padding:0 9px 0 9px ;
`;
export default function NavbarComponent() {
  return (
    <>
    <Div>
      <TopnavbarComponent/>  
    </Div>
 
    </>
  )
}
