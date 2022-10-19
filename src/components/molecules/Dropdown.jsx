import React from 'react'
import styled from 'styled-components'
import ToggleButton from '../atoms/buttons/ToggleButton'
import DropdownMenuItem from '../atoms/items/DropdownMenuItem'
import DropdownMenuItemTip from '../atoms/items/DropdownMenuItemTip'

const Dropdown = ({onAdd, title, size, menus}) => {
  // styled-components Handler
  const setMenuWrapper = (size) =>{
    switch (size) {
        case "large" :
            return "width : 256px;"
        case "medium" :
            return "width : 200px;"
        case "small" :
            return "width : 156px;"
    }
}

  // styled-components
  const Wrapper = styled.div`
    position : relative;
    display : inline-block;
    &:hover div{
      display : block;
    }
  `
  const MenuWrapper = styled.div`
    display : none;
    position : absolute;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    border-radius : 4px 4px 4px 4px;
    border : solid 2px var(--smoke);
    ${setMenuWrapper(size)}
  `

  
  return (
    <Wrapper>
      <ToggleButton size={size} kind="outlined" value={title}></ToggleButton>
      <MenuWrapper>
        <DropdownMenuItemTip size={size}></DropdownMenuItemTip>
        {
          menus.map((menu)=>{
            return (
              <DropdownMenuItem onAdd={onAdd} size={size} value={menu}></DropdownMenuItem>
            )
          })
        }
        <DropdownMenuItemTip size={size}></DropdownMenuItemTip>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Dropdown