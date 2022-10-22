import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {updateProfileInfo} from '../../../modules/profile'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
const StyledForm = styled.form`
    display : flex;
    gap : 2px;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    & input {
      padding-left : 10px;
      width : 200px;
      height : 40px;
      font-size : medium;
      font-weight : bold;
      border-radius : 2px;
      border : solid 2px var(--smoke);
    }
    & input:focus{
      outline : none !important;
      border-color: var(--indigo);
    }
    & input::placeholder{
      color: var(--smoke);
    }
    & button {
      width : 200px;
      height : 40px;
      font-size : medium;
      background-color : var(--indigo-bluh);
      color : white;
      border-radius : 2px;
      border : solid 2px var(--indigo-bluh);
    }
    & button:hover{
      background-color : var(--indigo);
      border : solid 2px var(--indigo);
    }
`

const LoginForm = () => {
  // redux action function
  const dispatch = useDispatch()
  const dispatchedUpdateProfileInfo = data => dispatch(updateProfileInfo(data))

  // navigator
  const navigate = useNavigate()


  // onSubmit handler
  const handleOnSubmit = (e) =>{
    // onSubmit 시에 React App 이 재실행되는 것을 막아줌 
    e.preventDefault() 

    // REST API Request
    axios.get(`/student/${e.target.studentId.value}`)
    .then((res)=>{dispatchedUpdateProfileInfo(res.data)})
    .then(()=>navigate('/main'))
    .catch((e)=>{console.log(e)})
  }
  return (
    <StyledForm onSubmit={handleOnSubmit}>
        <input type="text"     placeholder="Student Id" name="studentId"/>
        <input type="password" placeholder="Password"/>
        <button>Submit</button>
    </StyledForm>
  )
}

export default LoginForm