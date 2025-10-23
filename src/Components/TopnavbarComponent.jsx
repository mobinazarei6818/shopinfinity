import React from 'react'
import styled from "styled-components";
import { PiUserLight } from "react-icons/pi";
import { CiHome } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import Logo from '../assets/images/cropped-02.webp';
const Div=styled.div`
  width: 100%;
  height:40%;
  display: flex;
  border-bottom: 1px solid #d0d0d0;
`;
const DivIcon=styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;
  gap: 10px;
  color: #717171;
`;
const Boxlogo=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
     flex: 1 1 0%;
`;
const SearchBox=styled.div`
   flex: 1 1 0%;
   display: flex;
   align-items: flex-end;
   justify-content: flex-end;
  color: #717171;
   gap: 20px;
  position: relative;
`;
const SearchInput=styled.input`
    width:47%;
    outline: none;
    border: none;
    border-bottom: 1px solid #898989;
    font-size: 10px;
    background-color: transparent;
    padding: 7px 7px 7px 40px;
    &::placeholder{
      color: #a9a9a9;
    }
`;
function TopnavbarComponent() {
  return (
    <Div>
        <DivIcon>
            <PiUserLight size={"17px"}/>
            <PiShoppingCartLight size={"17px"}/>
            <CiHome size={"17px"}/>
        </DivIcon>
        <Boxlogo>
            <img src={Logo} style={{height:"33px"}}/>
        </Boxlogo>
        <SearchBox>
            <SearchInput type='text' placeholder='جستجو ...'/>
            <CiSearch size={"18px"}  style={{position:'absolute', bottom:'5px'}}/>
        </SearchBox>
    </Div>
  )
}

export default TopnavbarComponent