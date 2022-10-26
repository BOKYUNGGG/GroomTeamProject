import React, {useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import {courseColumns} from '../../../assets/courseData'
import { addProfessorCourses, deleteProfessorCourses } from '../../../modules/professorCourses'
import ProfessorCourseTable from '../../atoms/tables/ProfessorCourseTable'
const Wrapper = styled.div`
  display : flex;
  flex-direction : column;
  align-items : center;
`
const EmptyBox = styled.div`
  width : 100%;
  height : 600px;
  text-align : center;
  line-height : 600px;
`
const ProfessorCourseTab = () => {
  // rudux
  const {name, studentId} = useSelector(state=>state.profileReducer)
  const professorCoursesInfo = useSelector(state=>state.professorCoursesReducer)
  const dispatch = useDispatch()
  const dispatchedAdd = (data) => dispatch(addProfessorCourses(data))
  const dispatchedDelete = () => dispatch(deleteProfessorCourses())

  useEffect(()=>{
    // 모두 지우고
    dispatchedDelete()
    var config = {
      method: 'get',
      url: `http://ahci.ddns.net:8080/course/professor/${studentId}`,
    };
    axios(config)
    .then((res)=>{dispatchedAdd(res.data)})
    .catch((e)=>{
      alert(e)
      console.log(e)})
  }, [])

  return (
    <Wrapper>
      {
        !professorCoursesInfo ? 
        (null) : ( 
          (professorCoursesInfo.length === 0) ? 
            (<EmptyBox>{name}님께서 개설한 강좌가 없습니다.</EmptyBox>) : 
            (<ProfessorCourseTable data={professorCoursesInfo} columns={courseColumns}/>)        
          )
      }
    </Wrapper>
  )
}

export default ProfessorCourseTab