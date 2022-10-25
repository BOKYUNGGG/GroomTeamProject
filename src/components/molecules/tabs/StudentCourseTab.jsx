import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import styled from 'styled-components'
import {courseColumns} from '../../../assets/courseData'
import StudentCourseTable from '../../atoms/tables/StudentCourseTable'
import { addStudentCourses, deleteStudentCourses } from '../../../modules/studentCourses'
const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`
const FormWrapper = styled.div`
  display : flex;
  flex-direction : column;
  height : 40px;
  & select{
    font-size : medium;
  }
  & div{
    flex-grow : 1;
  }
`
const EmptyBox = styled.div`
  width : 100%;
  height : 600px;
  text-align : center;
  line-height : 600px;
`
const StudentCourseTab = () => {
  // redux
  const profileInfo = useSelector(state=>state.profileReducer)
  const studentCourseInfo = useSelector(state=>state.studentCoursesReducer)
  const dispatch = useDispatch()
  const dispatchedAdd = (data) => dispatch(addStudentCourses(data))
  const dispatchedDelete = () => dispatch(deleteStudentCourses())

  const onSubmit = (e) =>{
    e.preventDefault()
    dispatchedDelete()
    const data = JSON.stringify({
      semester : e.target.semester.value,
      studentId : profileInfo.studentId,
      year : parseInt(e.target.year.value)
    })
    
    
    axios.get(`/api/enrolment?${data}`)
    .then((res)=>{dispatchedAdd(res.data.courses)})
    .catch((e)=>{
      console.log(e)
      alert(e)
    })
  }

  useEffect(()=>{
    // 모두 지우고
    dispatchedDelete()
    

    axios.get("api/enrolment", {
      params : {
        semester : "SPRING",
        studentId : profileInfo.studentId,
        year : 2022
      }
    })
    .then((res)=>{dispatchedAdd(res.data.courses)})
    .catch((e)=>alert(e))
  }, [])
  
  return (
    <Wrapper>
      <FormWrapper>
        <form onSubmit={onSubmit}>
          <select name="year">
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <select name="semester">
            <option value="SPRING">1학기</option>
            <option value="SUMMER">여름학기</option>
            <option value="FALL">2학기</option>
            <option value="WINTER">겨울학기</option>
          </select>
          <input type="submit" value="조회"></input>
        </form>
      </FormWrapper>
      {
        !studentCourseInfo ? 
        (null) : ( 
          (studentCourseInfo.length === 0) ? 
            (<EmptyBox>{profileInfo.name}님께서 신청한 강좌가 없습니다.</EmptyBox>) : 
            (<StudentCourseTable data={studentCourseInfo} columns={courseColumns}/>)        
          )
      }
      
    </Wrapper>
  )
}

export default StudentCourseTab