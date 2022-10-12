import React from 'react'
import styled from 'styled-components'
import RoundInput from '../atoms/inputs/RoundInput'
import RoundButton from '../atoms/buttons/RoundButton'
const Wrapper = styled.form`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    width : 100vw;
    height : 90vh;
`
const InputsWrapper = styled.div`
    display : flex;
    flex-direction : column;
`


const LoginForm = () => {
  return (
    <Wrapper>
        <h1>Login</h1>
        <InputsWrapper>
          <RoundInput size="large" kind="normal" type="text" placeholder="courseId"/>
          <RoundInput size="large" kind="normal" type="password" placeholder="password"/>
        </InputsWrapper>
        <RoundButton size="large" kind="outlined" value="Submit"/>
    </Wrapper>
  )
}

export default LoginForm