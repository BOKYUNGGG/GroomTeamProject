import React from 'react'
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
    & .submit{
      border : solid 2px var(--indigo);
      color : var(--indigo);
      background-color : white;
    }
    & .submit:hover{
      color : white;
      background-color : var(--indigo);
    }
`
const LoginForm = () => {
  const dispatch = useDispatch()
  const dispatchedUpdateProfileInfo = data => dispatch(updateProfileInfo(data))
  const navigate = useNavigate()


  const onSubmit = (e) =>{
    e.preventDefault() 
    axios.get(`/student/${e.target.studentId.value}`)
    .then((res)=>{
      dispatchedUpdateProfileInfo(res.data)
      alert(`${res.data.name}님 어서오세요!`)
    })    
    .then(()=>navigate('/main'))
    .catch((e)=>{alert(e)})
    
  }
  return (
    <StyledForm onSubmit={onSubmit}>
        <input type="text"     placeholder="Student Id" name="studentId"/>
        <input type="password" placeholder="Password"/>
        <input className='submit' type="submit" value="Submit"></input>
    </StyledForm>
  )
}
export default LoginForm