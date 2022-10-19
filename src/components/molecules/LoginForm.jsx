import React,{useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {useDispatch, useSelector } from 'react-redux'
import { addProfileInfo } from '../../modules/profile'
import { useNavigate } from 'react-router-dom'
import RoundInput from '../atoms/inputs/RoundInput'
import RoundButton from '../atoms/buttons/RoundButton'
const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`


const LoginForm = () => {
  const dispatch = useDispatch()
  const dispatchedAddProfileInfo = data => dispatch(addProfileInfo(data))
  const navigate = useNavigate()

  const profile = {
    studentId : null,
    password : null
  }
  const HandleLiftUp = (key, value) =>{
    profile[key] = value;
  }

  const fetchUser = async () =>{
    try{
      const response = await axios.get(`/student/${profile.studentId}`)
      dispatchedAddProfileInfo(response.data)
      navigate('/main')
    }catch(e){
      console.log(e)
    }
  }

  return (
    <Wrapper>
        <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="text" id="studentId" placeholder="studentId"/>
        <RoundInput HandleLiftUp={HandleLiftUp} size="large" kind="normal" type="password" id="password" placeholder="password"/>
        <RoundButton onClick={fetchUser} size="large" kind="outlined" value="Submit"/>
    </Wrapper>
  )
}

export default LoginForm