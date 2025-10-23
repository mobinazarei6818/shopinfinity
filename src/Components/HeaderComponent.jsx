import React from 'react'
import NavbarComponent from './NavbarComponent'
import styled from "styled-components";

const Div=styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
`;
export default function HeaderComponent() {
  return (
    <>
        <Div>
          <NavbarComponent/>
        </Div>
       
    </>

  )
}
