import React from 'react'
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
          <StyledSvg 
            key={index+40000}
            onClick={onDelete}
            id={element.menu}
            xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
          </StyledSvg>
        </MenuItemWrapper>)
      }
    </Wrapper>
  )
}

export default TabMenuContainer