import React from 'react'
import {useDispatch } from 'react-redux'
import { addTabMenuItem } from '../../modules/tabMenu'
import Dropdown from '../molecules/Dropdown'
import RoundButton from '../atoms/buttons/RoundButton'
import Logo from '../atoms/svgs/Logo'
import styled from 'styled-components'
const Wrapper = styled.div`
  display : flex;
  align-items : center;
`
const Header = () => {
  const dispatch = useDispatch()
  const onAdd = data => dispatch(addTabMenuItem(data))

  const dropdwons = [
    {
      title : "Student",
      size : "medium",
      menus : ["Student's Course", "Put Enrollment"]
    },
    {
      title : "Professor",
      size : "medium",
      menus : ["Professor's Course", "Create Enrollment"]
    }
  ]
  

  return (
    <Wrapper>
      <Logo></Logo>
      <RoundButton value="Search Course" size="medium" kind="outlined"></RoundButton>
      {
        dropdwons.map((dropdown)=>(
          <Dropdown onAdd={onAdd} title={dropdown.title} size={dropdown.size} menus={dropdown.menus}></Dropdown>
        ))
      }
    </Wrapper>
  )
}

export default Header