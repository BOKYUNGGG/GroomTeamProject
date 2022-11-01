import React from 'react'
import { useNavigate } from 'react-router-dom'
import { departmentList } from '../../../assets/courseData'
import {updateProfileInfo} from '../../../modules/profile'
import {useDispatch} from 'react-redux'
import styled from 'styled-components'
import axios from 'axios'
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
const SigninForm = () => {
  // redux action function
  const dispatch = useDispatch()
  const dispatchedUpdateProfileInfo = data => dispatch(updateProfileInfo(data))
  // navigator
  const navigate = useNavigate()
  // onSubmit handler
  const handleOnSubmit = (e) =>{
    // onSubmit 시에 React App 이 재실행되는 것을 막아줌 
    e.preventDefault() 

    var data = JSON.stringify({
      studentId : parseInt(e.target.studentId.value),
      email : e.target.email.value,
      password : e.target.password.value,
      department : e.target.department.value,
      name : e.target.name.value,
    })
    console.log(data)
    var config = {
      method: 'post',
      url: '/student',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    }
    axios(config)
    .then((res)=>{
      console.log(res)
      dispatchedUpdateProfileInfo(res.data)}) 
    .then(()=>{alert(`${e.target.name.value}님 만나서 반갑습니다!`)})       
    .then(()=>{navigate('/main')})
    .catch((e)=>{
      console.log(e)
      alert(e)});
  }
  // Reder
  return (
    <StyledForm onSubmit={(e)=>{handleOnSubmit(e)}}>
        <input name="studentId" type="text" placeholder="studentId"/>
        <input name="name" type="text" placeholder="name"/>
        <input name="email" type="email" placeholder="example@example.com"/>
        <input name="password" type="password" placeholder="password"/>
        <select name="department">
          <option>Department</option>
          {departmentList.map((element, index)=>(
            <option key={index} value={element}>{element}</option>
          ))}
        </select>
        <input className='submit' name="submit" type="submit" value="Submit"/>
    </StyledForm>
  )
}

export default SigninForm