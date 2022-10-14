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


const LoginForm = () => {
  const formData = {
    courseId : "",
    password : ""
  }
  const HandleLiftUp = (key, value) =>{
    formData[key] = value;
  }
  const HandleSubmit = (event) =>{
    event.preventDefault()
    console.log(formData)
    alert("로그인 제출")
  }
  return (
    <Wrapper onSubmit={HandleSubmit}>
        <InputsWrapper>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="text" id="courseId" placeholder="courseId"/>
          <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="password" id="password" placeholder="password"/>
          <RoundButton size="large" kind="outlined" value="Submit"/>
        </InputsWrapper>
    </Wrapper>
  )
}

export default LoginForm