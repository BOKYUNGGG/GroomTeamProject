import React from 'react'
import styled from 'styled-components'
import SigninForm from '../components/molecules/SigninForm'
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : 90vh;
`

const SigninPage = () => {
  return (
    <Wrapper>
      <h1>Sign In</h1>
      <SigninForm></SigninForm>
    </Wrapper>
  )
}

export default SigninPage