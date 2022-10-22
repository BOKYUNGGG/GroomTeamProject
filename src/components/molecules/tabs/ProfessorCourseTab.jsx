import React, {useEffect} from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'



import {courseColumns} from '../../../assets/courseData'
import { addProfessorCourses, deleteProfessorCourses } from '../../../modules/professorCourses'
import ProfessorCourseTable from '../../atoms/tables/ProfessorCourseTable'




const ProfessorCourseTab = () => {
  // rudux
  const profileInfo = useSelector(state=>state.profileReducer)
  const professorCoursesInfo = useSelector(state=>state.professorCoursesReducer)
  const dispatch = useDispatch()
  const dispatchedAdd = (data) => dispatch(addProfessorCourses(data))
  const dispatchedDelete = () => dispatch(deleteProfessorCourses())

  useEffect(()=>{
    // 모두 지우고
    dispatchedDelete()
    
    axios.get(`/course/professor/${profileInfo.studentId}`)
    .then((res)=>{dispatchedAdd(res.data)})
    .catch((e)=>{console.log(e)})
  }, [])

  return (
    <div>ProfessorCourseTab
      <ProfessorCourseTable data={professorCoursesInfo} columns={courseColumns}></ProfessorCourseTable>
    </div>
  )
}

export default ProfessorCourseTab