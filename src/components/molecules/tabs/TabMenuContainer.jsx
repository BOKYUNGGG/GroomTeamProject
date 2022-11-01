import React from 'react'
import DeleteSvg from '../../atoms/svgs/DeleteSvg'
import styled from 'styled-components'

const Wrapper = styled.div`
  display : flex;
  gap : 4px;
`
const MenuItemWrapper = styled.div`
  padding-left : 4px;
  padding-right : 4px;
  display :flex;
  gap : 4px;
  align-items : center;
  border-radius : 4px 4px 0 0;
  border-bottom : none;
  &.selected{
    background-color : var(--indigo);
    color : white;
  }
  &.non-selected{
    background-color : var(--smoke);
    color : white;
  }
`
const StyledMenuItem = styled.div`
  height : 40px;
  line-height : 40px;

`
const StyledSvg = styled.svg`
  fill : white;
  position : relative;
  top : 2px;
  &:hover {
      fill : var(--smoke);
  }
`

const TabMenuContainer = ({tabInfo, dispatchedDeleteTab, dispatchedToggleTab}) => {
  // delete handler
  const onDelete = (e) => {
    console.log(e)
    dispatchedDeleteTab(e.currentTarget.id);
  }
  const onToggle = (e) => {
    dispatchedToggleTab(e.currentTarget.id)
  }
  console.log('tabInfo : ', tabInfo)
  return (
    <Wrapper>
      {
        tabInfo.map((element, index) => 
        <MenuItemWrapper key={index} className={element.className}>
            <StyledMenuItem key={index}>
              <div key={index} id={element.menu} onClick={onToggle}>{element.menu}</div>
            </StyledMenuItem>
          <DeleteSvg key={index} onDelete={onDelete} id={element.menu}/>
        </MenuItemWrapper>)
      }
    </Wrapper>
  )
}

export default TabMenuContainer