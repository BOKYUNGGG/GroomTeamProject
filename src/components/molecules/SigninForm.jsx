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

const SigninForm = () => {
  return (
    <Wrapper>
        <h1>Sign In</h1>
        <InputsWrapper>
          <RoundInput size="large" kind="normal" type="text" placeholder="name"/>
          <RoundInput size="large" kind="normal" type="password" placeholder="password"/>
          <RoundInput size="large" kind="normal" type="email" placeholder="example@example.com"/>
          <RoundInput size="large" kind="normal" type="text" placeholder="department"/>
        </InputsWrapper>
        <RoundButton size="large" kind="outlined" value="Submit"/>
    </Wrapper>  )
}

export default SigninForm