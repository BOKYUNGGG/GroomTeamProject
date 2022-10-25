import React from 'react'
import styled from 'styled-components'
import LoginForm from '../components/molecules/forms/LoginForm'
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : 90vh;
`
const LoginPage = () => { 
  return (
    <Wrapper>
      <h1>Login</h1>
      <LoginForm></LoginForm>
    </Wrapper>
  )
}

export default LoginPage