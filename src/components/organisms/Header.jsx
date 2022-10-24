import React from 'react'
import { useSelector } from 'react-redux'
import Logo from '../atoms/svgs/Logo'
import styled from 'styled-components'
const HeaderWrapper = styled.div`
  display : flex;
  align-items : center;
  padding : 20px;
`
const CenterWrapper = styled.div`
  display:flex;
  align-items : center;
  padding-left : 100px;
  flex-grow : 1;
  gap : 10px;
`
const ButtonWrapper = styled.div`
  & button{
    border : none;
    font-size : large;
    text-align: center;
    line-height : 48px;
    border-radius : 4px;
    color : white;  
    width : 156px;
    height : 48px;
    background-color : #273138;
    
  }
  
  & button:hover{
    background-color : var(--slate);
  }
  & button:active{
    background-color : var(--indigo);
  }
`
const Dropdown = styled.div`
  display : flex;
  font-size : large;
  justify-content : center;
  align-items : center;
  border-radius : 4px;
  color : white;
  background-color : #273138;
  width : 156px;
  height : 48px;

  // dropdown items
  & div{
    z-index : 5;
    display :none;    
    background-color : var(--slate);
    border-radius : 4px;
    height : 80px;
    text-align : center;
    width : 156px;
    font-size : small;
  }
  &:hover div{
    display : flex;
    justify-content : center;
    flex-direction : column;
    position : absolute;
    top : 114px;
  }
  & div button{
    padding : 8px;
    color : white;
    background-color var(--slate); 
    border : none;
  }
  & div button:hover{
    background-color : #273138;
  }
  & div button:active{
    background-color : var(--indigo);
  }
`
const ProfileWrapper = styled.div`
  position : relative;
  display : inline-block;
  & div{
    visibility : hidden;
    width : 120px;
    background-color : var(--indigo);
    color : #fff;
    text-align : center;
    padding : 5px 0;
    border-radius : 6px;
    position : absolute;
    width : 200px;
    top : -10%;
    left : -220px;
    z-index : 1;
  }
  &:hover div{
    visibility: visible;
  }
  & div::before{
    content : " ";
    position : absolute;
    top : 24px;
    left : 205px;
    margin-left : -5px;
    border : solid 5px var(--indigo);
    border-color : transparent transparent transparent var(--indigo); 
  }
  & div p{
    padding-left : 10px;
    text-align: start;
  }
`
const Header = ({dispatchedAddTab}) => {
  const profileInfo = useSelector((state)=>state.profileReducer)

  // handler
  const onClick = (e) => {
    dispatchedAddTab({menu : e.target.value})
  }

  return (
    <HeaderWrapper>
      <Logo/>
      <CenterWrapper>
        <ButtonWrapper>
          <button onClick={onClick} value="강의검색">강의검색</button>
        </ButtonWrapper>
        <Dropdown>Student
          <div>
            <button onClick={onClick} value="신청강의조회">신청강의조회</button>
            <button onClick={onClick} value="수강신청">수강신청</button>
          </div>
        </Dropdown>
        <Dropdown>Professor
          <div>
            <button onClick={onClick} value="나의개설강의">나의개설강의</button>
            <button onClick={onClick} value="강의개설">강의개설</button>
          </div>
        </Dropdown>
      </CenterWrapper>
      <ProfileWrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="80" fill="var(--slate)" viewBox="0 0 16 16">
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
          <text x="1" y="20" fontSize="4.5px">{profileInfo.name}</text>
        </svg>
        <div>
          <p>학번 : {profileInfo.studentId}</p>
          <p>학과 : {profileInfo.department}</p>
          <p>{profileInfo.email}</p>
        </div>
      </ProfileWrapper>
    </HeaderWrapper>
  )
}

export default Header