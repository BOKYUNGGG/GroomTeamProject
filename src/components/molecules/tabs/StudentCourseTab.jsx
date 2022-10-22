import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import {courseColumns} from '../../../assets/courseData'
import StudentCourseTable from '../../atoms/tables/StudentCourseTable'
import { addStudentCourses, deleteStudentCourses } from '../../../modules/studentCourses'
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
    

    axios.get("http://ahci.ddns.net:8080/enrolment", {
      params : {
        semester : "FALL",
        studentId : profileInfo.studentId,
        year : 2022
      }
    })
    .then((res)=>{dispatchedAdd(res.data.courses)})
    .catch((e)=>console.log(e))
  }, [])
  
  return (
    <div>
      <div>신청한 과목</div>
      <button onClick={()=>{console.log(profileInfo)}}>profileInfo</button>

      <button onClick={()=>{console.log(studentCourseInfo)}}>studentCourseInfo</button>
      <StudentCourseTable data={studentCourseInfo} columns={courseColumns}></StudentCourseTable>
      <button>신청 취소</button>


    </div>
  )
}

export default StudentCourseTab