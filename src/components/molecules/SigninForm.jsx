import React from 'react'
import styled from 'styled-components'
import RoundInput from '../atoms/inputs/RoundInput'
import RoundButton from '../atoms/buttons/RoundButton'
const Wrapper = styled.form`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`
const InputsWrapper = styled.div`
    display : flex;
    flex-direction : column;
`

const SigninForm = () => {
  // Data
  const formData = {
    name : "",
    password : "",
    email : "",
    department : ""
  }

  // Handler
  const HandleLiftUp = (key, value) =>{
    formData[key] = value;
  }
  const HandleSubmit = (event) =>{
    event.preventDefault()
    console.log(formData)
    alert("회원가입 제출")
  }

  // Render
  return (
    <Wrapper onSubmit={HandleSubmit}>
        <InputsWrapper>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="text" id="name" placeholder="name"/>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="password" id="password" placeholder="password"/>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="email" id="email" placeholder="example@example.com"/>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="text" id="department" placeholder="department"/>
          <RoundButton size="large" kind="outlined" value="Submit"/>
        </InputsWrapper>
    </Wrapper>  )
}
export default SigninForm