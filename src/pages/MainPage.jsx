import React from 'react'
import Header from '../components/organisms/Header'
import TabMenuContainer from '../components/molecules/tabs/TabMenuContainer'
import Content from '../components/organisms/Content'
import { useSelector, useDispatch } from 'react-redux'
import {addTab, toggleTab, deleteTab} from '../modules/tab'


import styled from 'styled-components'
const Wrapper = styled.div`
  display : grid;
  grid-template-rows: 100px 40px auto;
  overflow : auto;
`

const MainPage = () => {

    // redux
    const dispatch = useDispatch()
    const dispatchedAddTab = (data) => dispatch(addTab(data))
    const dispatchedToggleTab = (data) => dispatch(toggleTab(data))
    const dispatchedDeleteTab = (data) => dispatch(deleteTab(data))
    const tabInfo = useSelector(state=>state.tabReducer)
    
  return (
    <Wrapper>
      <Header dispatchedAddTab={dispatchedAddTab}></Header>
      <TabMenuContainer 
        tabInfo={tabInfo}
        dispatchedDeleteTab={dispatchedDeleteTab}
        dispatchedToggleTab={dispatchedToggleTab}
      />
      <Content tabsInfo={tabInfo}></Content>
    </Wrapper>
  )
}

export default MainPage