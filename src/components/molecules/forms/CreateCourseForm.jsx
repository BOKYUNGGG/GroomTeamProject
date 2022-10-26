import React from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {changeCreateCourses, deleteCreateCourses} from '../../../modules/createCourses'
import {departmentList} from '../../../assets/courseData'
import styled from 'styled-components'
const FormWrapper = styled.div`
  display : flex;
  margin : 10px;
  flex-direction : column;
  align-items : flex-end;
  background-color : #f3f5f7;
  border : solid 2px var(--smoke);
  padding-top : 10px;
  padding-left : 14px;
  padding-right : 14px;
  padding-bottom : 30px;
  & form {
    display : flex;
    flex-direction : column;
    align-items : flex-end;
    gap : 5px;
  }
  & form div{
    display : flex;
    align-items : center;
    gap : 4px;
    height : 40px;
  }
  & form div *{
    padding-left : 10px;
    height : 40px;
    line-height : 40px;
    font-size : large;
    font-weight : bold;
  }
  & form div label{
    width : 146px;
    background-color : white;
    color : var(--slate);
    border-radius : 4px;
    border : solid 2px var(--indigo);
  }
  & form div input{
    width : 230px;
    border-radius : 4px;
    border : solid 2px var(--smoke);
  }
  & form div input:focus{
    outline : none !important;
    border-color: var(--indigo);
  }
  & form div input::placeholder{
    color: var(--smoke);
  }
  & form div select{
    width : 230px;
    border-radius : 4px;
    border : solid 2px var(--smoke);
  }
  & form .submit{
    width : 100%;
    background-color : var(--indigo);
    color : white;
    font-size : large;
    border : none;
    border-radius : 4px;
    height : 40px;
  }
`
const CreateCourseForm = ({data}) => {
    const dispatch = useDispatch()
    const dispatchedDelete = (data) => dispatch(deleteCreateCourses(data))
    const dispatchedChange = (data) => dispatch(changeCreateCourses(data))
    const {studentId} = useSelector(state=>state.profileReducer)


    const onChange = (e) => {
      const {value, name} = e.target;
      dispatchedChange({
        ...data,
        [name] : value
      })
    }
    const onSubmit = (e) => {
      e.preventDefault() 
      // REST API Request
      var courseInfo = JSON.stringify({
        studentId : studentId,
        capacity : parseInt(e.target.capacity.value),
        courseId : parseInt(e.target.courseId.value),
        credit : parseInt(e.target.credit.value),
        department : e.target.department.value,
        semester : e.target.semester.value,
        title : e.target.title.value,
        year : parseInt(e.target.year.value),
      })
    
      var config = {
        method: 'post',
        url: 'http://ahci.ddns.net:8080/course',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : courseInfo
      }
      axios(config)
      .then(()=>{e.target.submit.style = "background-color : var(--mint);"}) 
      .then(()=>{e.target.submit.innerText = "Success !!;"})   
      .catch((e)=>{
        console.log(e)
        alert(e)});
    }

    return (
        <FormWrapper>
            <svg
                onClick={()=>{dispatchedDelete(data)}} 
                xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                <line x1="10" x2="26" y1="18" y2="18" stroke="red" strokeWidth="3"/>
            </svg>
            <form onSubmit={onSubmit}>
            <div>
                <label>Year</label>
                <input onChange={onChange} name="year" type="text" placeholder='2022' value={data.year}></input>
            </div>
            <div>
                <label>Credit</label>
                <input onChange={onChange} name="credit" type="text" placeholder='3' value={data.credit}></input>
            </div>
            <div>
                <label>courseId</label>
                <input onChange={onChange} name="courseId" type="text" placeholder='20220000' value={data.courseId}></input>
            </div>
            <div>
                <label>Capacity</label>
                <input onChange={onChange} name="capacity" type="text" placeholder='3' value={data.capacity}></input>
            </div>
            <div>
                <label>Title</label>
                <input onChange={onChange} name="title" type="text" placeholder='Programming' value={data.title}></input>
            </div>
            <div>
                <label>Semester</label>
                <select onChange={onChange} name="semester" value={data.semester}>
                    <option value="SPRING">SPRING</option>
                    <option value="SUMMER">SUMMER</option>
                    <option value="FALL">FALL</option>
                    <option value="WINTER">WINTER</option>
                </select>
            </div>
            <div>
                <label>Department</label>
                <select onChange={onChange} name="department" value={data.department}>
                {departmentList.map((element, index)=>(
                    <option key={index} value={element}>{element}</option>
                ))}
                </select>
            </div>
            <input className='submit' name="submit" type="submit" value="Submit"/>
            </form>
        </FormWrapper>

  )
}

export default CreateCourseForm