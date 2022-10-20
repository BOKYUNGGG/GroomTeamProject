import React, {useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { departmentList } from '../../../assets/courseData'
import {updateProfileInfo} from '../../../modules/profile'
import {useDispatch} from 'react-redux'
const StyledForm = styled.form`
    display : flex;
    gap : 2px;
    flex-direction : column;
    justify-content : center;
    align-items : center;

    // inputs styling
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
    & select {
      padding-left : 10px;
      width : 200px;
      height : 40px;
      color : var(--smoke);
      font-size : medium;
      font-weight : bold;
      border-radius : 2px;
      border : solid 2px var(--smoke);
    }

    // button styling
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

    // select styling
    & select {
      width : 200px;
      height : 40px;
      color : var(--smoke);
      font-size : medium;
      font-weight : bold;
      border-radius : 2px;
      border : solid 2px var(--smoke);
    }
    & select:focus {
      color : black;
    }
`

const SigninForm = () => {
  // redux action function
  const dispatch = useDispatch()
  const dispatchedUpdateProfileInfo = data => dispatch(updateProfileInfo(data))

  // onSubmit handler
  const handleOnSubmit = (e) =>{
    // onSubmit 시에 React App 이 재실행되는 것을 막아줌 
    e.preventDefault() 

    // REST API
    axios.post('http://ahci.ddns.net:8080/student', {
      name : e.target.name.value,
      email : e.target.email.value,
      password : e.target.password.value,
      department : e.target.department.value
    })
    .then((res)=>console.log(res))
    .then((res)=>{dispatchedUpdateProfileInfo(res.data)})
    .catch((e)=>{console.log(e)})
  }

  return (
    <StyledForm onSubmit={handleOnSubmit}>
        <input name="name" type="text" placeholder="name"/>
        <input name="email" type="email" placeholder="example@example.com"/>
        <input name="password" type="password" placeholder="password"/>
        <select name="department">
          <option>Department</option>
          {departmentList.map((element)=>(
            <option value={element}>{element}</option>
          ))}
        </select>
        <button>Submit</button>
    </StyledForm>
  )
}

export default SigninForm