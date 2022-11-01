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
  
  const dispatch = useDispatch()
  const dispatchedUpdateProfileInfo = data => dispatch(updateProfileInfo(data))
  const navigate = useNavigate()

  const handleOnSubmit = (e) =>{
    e.preventDefault() 
    var data = JSON.stringify({
      studentId : parseInt(e.target.studentId.value),
      email : e.target.email.value,
      password : e.target.password.value,
      department : e.target.department.value,
      name : e.target.name.value,
    })
    
    var config = {
      method: 'post',
      url: '/student',
      headers: {'Content-Type': 'application/json'},
      data : data
    }

    axios(config)
    .then((res)=>{dispatchedUpdateProfileInfo(res.data)}) 
    .then(()=>{alert(`${e.target.name.value}님 만나서 반갑습니다!`)})       
    .then(()=>{navigate('/main')})
    .catch((e)=>{alert(e)});
  }

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