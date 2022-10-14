import React from 'react'
import styled from 'styled-components'
import ToggleButton from '../atoms/buttons/ToggleButton'
import DropdownMenuItem from '../atoms/Items/DropdownMenuItem'
import DropdownMenuItemTip from '../atoms/Items/DropdownMenuItemTip'

// props == {size, menu, title}
const Dropdown = (props) => {
  // props 비구조화 할당
  const {size, menu} = props;

  // styled-components Handler
  const setMenuWrapper = (size) =>{
    switch (size) {
        case "large" :
            return "right : 8px; width : 256px;"
        case "medium" :
            return "right : 7px; width : 200px;"
        case "small" :
            return "right : 6px; width : 156px;"
    }
}


  // styled-components
  const Wrapper = styled.div`
    display : flex; 
    flex-direction : column;
    justify-content : center;
    align-items : center;
  `
  const MenuWrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    position : relative;
    border-radius : 4px 4px 4px 4px;
    border : solid 2px var(--smoke);
    ${setMenuWrapper(size)}
  `

  
  return (
    <Wrapper>
      <ToggleButton size={props.size} kind="outlined" value={props.title}></ToggleButton>
      <MenuWrapper>
        <DropdownMenuItemTip size={props.size}></DropdownMenuItemTip>
        {
          menu.map((data)=>{
            return (
              <DropdownMenuItem size={size} value={data.value}></DropdownMenuItem>
            )
          })
        }
        <DropdownMenuItemTip size={props.size}></DropdownMenuItemTip>
      </MenuWrapper>
    </Wrapper>
  )
}

export default Dropdown