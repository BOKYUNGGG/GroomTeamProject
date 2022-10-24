import React from 'react'
import styled from 'styled-components'
import qs from 'qs'
import LoginForm from '../components/molecules/forms/LoginForm'
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    height : 90vh;
`
const LoginPage = () => { 
  const data = "김예준"
  console.log(data)
  console.log(encodeURIComponent(data))

  const object = {keyword : encodeURIComponent(data)}
  console.log(object)
  console.log(JSON.stringify(object))

  return (
    <Wrapper>
      <h1>Login</h1>
      <LoginForm></LoginForm>
    </Wrapper>
  )
}

export default LoginPage