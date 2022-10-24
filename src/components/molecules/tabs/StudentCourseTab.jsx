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
const StudentCourseTab = () => {
  // redux
  const profileInfo = useSelector(state=>state.profileReducer)
  const studentCourseInfo = useSelector(state=>state.studentCoursesReducer)
  const dispatch = useDispatch()
  const dispatchedAdd = (data) => dispatch(addStudentCourses(data))
  const dispatchedDelete = () => dispatch(deleteStudentCourses())

  useEffect(()=>{
    // 모두 지우고
    dispatchedDelete()
    

    axios.get("api/enrolment", {
      params : {
        semester : "FALL",
        studentId : profileInfo.studentId,
        year : 2022
      }
    })
    .then((res)=>{
      dispatchedAdd(res.data.courses)
      console.log(res.data)
    })
    .catch((e)=>console.log(e))
  }, [])
  
  return (
    <Wrapper>
      <StudentCourseTable data={studentCourseInfo} columns={courseColumns}></StudentCourseTable>
    </Wrapper>
  )
}

export default StudentCourseTab