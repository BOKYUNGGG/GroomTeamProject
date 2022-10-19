import React from 'react'
import TabMenuContainer from '../components/molecules/TabMenuContainer'
import Header from '../components/organisms/Header'
import Content from '../components/organisms/Content'


import styled from 'styled-components'
const Wrapper = styled.div`

`

const MainPage = () => {
  return (
    <Wrapper>
      <Header></Header>
      <TabMenuContainer></TabMenuContainer>
      <Content></Content>
    </Wrapper>
  )
}

export default MainPage