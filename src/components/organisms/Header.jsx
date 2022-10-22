import React from 'react'

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
    top : 72px;
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
const Header = ({dispatchedAddTab}) => {
  // handler
  const onClick = (e) => {
    dispatchedAddTab({menu : e.target.value})
  }

  
  return (
    <HeaderWrapper>
      <Logo/>
      <CenterWrapper>
        <ButtonWrapper>
          <button onClick={onClick} value="Search Course">Search Course</button>
        </ButtonWrapper>
        <Dropdown>Student
          <div>
            <button onClick={onClick} value="Student's Course">Student's Course</button>
            <button onClick={onClick} value="Put Enrollment">Put Enrollment</button>
          </div>
        </Dropdown>
        <Dropdown>Professor
          <div>
            <button onClick={onClick} value="Professor's Course">Professor's Course</button>
            <button onClick={onClick} value="Create Course">Create Course</button>
          </div>
        </Dropdown>
      </CenterWrapper>
      <div>Profile</div>
    </HeaderWrapper>
  )
}

export default Header